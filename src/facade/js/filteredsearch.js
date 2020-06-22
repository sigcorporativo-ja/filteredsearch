/**
 * @module M/plugin/FilteredSearch
 */
import 'assets/css/filteredsearch';
import 'assets/css/fonts';
import FilteredSearchControl from './filteredsearchcontrol';
import api from '../../api';
import { getValue } from './i18n/language';

export default class FilteredSearch extends M.Plugin {
  /**
   * @classdesc
   * Main facade plugin object. This class creates a plugin
   * object which has an implementation Object
   *
   * @constructor
   * @extends {M.Plugin}
   * @param {Object} impl implementation object
   * @api stable
   */
  constructor(options) {
    super();
    /**
     * Facade of the map
     * @private
     * @type {M.Map}
     */
    this.map_ = null;

    /**
     * Array of controls
     * @private
     * @type {Array<M.Control>}
     */
    this.controls_ = [];

    /**
     * Position of the plugin on browser window
     * @private
     * @type {Enum}
     * Possible values: 'TL', 'TR', 'BR', 'BL'
     */
    this.position_ = options.position || 'TR';

    /**
     * Metadata from api.json
     * @private
     * @type {Object}
     */
    this.metadata_ = api.metadata;
  }

  /**
   * This function adds this plugin into the map
   *
   * @public
   * @function
   * @param {M.Map} map the map to add the plugin
   * @api stable
   */
  addTo(map) {
    const pluginOnLeft = !!(['TL', 'BL'].includes(this.position_));

    const values = {
      pluginOnLeft,
    };

    this.control_ = new FilteredSearchControl(values);
    this.controls_.push(this.control_);
    this.map_ = map;

    // Dependiendo de dónde se muestre el plugin, mostrará una flecha u otra.
    const collapsedButton = 'g-plugin-filteredsearch-filter';

    // panel para agregar control - no obligatorio
    this.panel_ = new M.ui.Panel('panelFilteredSearch', {
      className: 'filtered-search-panel',
      collapsible: true,
      position: M.ui.position[this.position_],
      collapsedButtonClass: collapsedButton,
      tooltip: getValue('tooltip'),
    });
    this.panel_.addControls(this.controls_);
    map.addPanels(this.panel_);
  }

  /**
   * Destroys plugin
   * @public
   * @function
   * @api
   */
  destroy() {
    this.map_.removeControls(this.controls_);
    [this.map_, this.control_, this.controls_, this.panel_] = [null, null, null, null];
  }

  /**
   * This function gets metadata plugin
   *
   * @public
   * @function
   * @api stable
   */
  getMetadata() {
    return this.metadata_;
  }

  /**
   * @getter
   * @public
   */
  get name() {
    return 'filteredsearch';
  }
}
