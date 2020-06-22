import M$plugin$FilteredSearch from './/facade/js/filteredsearch';
import M$control$FilteredSearchControl from './/facade/js/filteredsearchcontrol';
import M$impl$control$FilteredSearchControl from './/impl/ol/js/filteredsearchcontrol';

if (!window.M.plugin) window.M.plugin = {};
if (!window.M.control) window.M.control = {};
if (!window.M.impl) window.M.impl = {};
if (!window.M.impl.control) window.M.impl.control = {};
window.M.plugin.FilteredSearch = M$plugin$FilteredSearch;
window.M.control.FilteredSearchControl = M$control$FilteredSearchControl;
window.M.impl.control.FilteredSearchControl = M$impl$control$FilteredSearchControl;
