/**
 * @module M/impl/control/FilteredSearchControl
 */
export default class FilteredSearchControl extends M.impl.Control {
  /**
   * This function adds the control to the specified map
   *
   * @public
   * @function
   * @param {M.Map} map to add the plugin
   * @param {HTMLElement} html of the plugin
   * @api stable
   */
  addTo(map, html) {
    // obtengo la interacción por defecto del dblclick para manejarla
    super.addTo(map, html);
  }
}
