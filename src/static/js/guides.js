var PLANTS = "plant";
var SYSTEMS = "system";
var COMPONENTS = "component";
var initialFilter = "all";
var plantsInputSelect = document.getElementById('plants-filter');
var systemsInputSelect = document.getElementById('systems-filter');
var componentsInputSelect = document.getElementById('components-filter');
var plantsFilter = "";
var systemsFilter = "";
var componentsFilter = "";
var initialDisplayedPlantGuides = 6;
var initialDisplayedSystemGuides = 6;
var initialDisplayedComponentGuides = 6;

plantsInputSelect.addEventListener('change', function handleChange(event) {
  plantsFilter = plantsInputSelect.options[plantsInputSelect.selectedIndex].value;
  filterPlantGuides(plantsFilter);
  systemsFilter = initialFilter;
  componentsFilter = initialFilter;
});
systemsInputSelect.addEventListener('change', function handleChange(event) {
  systemsFilter = systemsInputSelect.options[systemsInputSelect.selectedIndex].value;
  filterSystemGuides(systemsFilter);
  plantsFilter = initialFilter;
  componentsFilter = initialFilter;
});

componentsInputSelect.addEventListener('change', function handleChange(event) {
  componentsFilter = componentsInputSelect.options[componentsInputSelect.selectedIndex].value;
  filterComponentGuides(componentsFilter);
  plantsFilter = initialFilter;
  systemsFilter = initialFilter;
});

function resetFilterValues() {
  plantsInputSelect.value = initialFilter;
  systemsInputSelect.value = initialFilter;
  componentsInputSelect.value = initialFilter;
}

function filterPlantGuides(filter, searchKeyWord='') {
  let displayedPlantGuides = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");
  if (filter == "all") filter = "";
  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];
    if (guideType == PLANTS) {
      if (x[i].className.includes(filter)) displayedPlantGuides += 1;
      removeClass(x[i], "show-html-element");
      if (searchKeyWord.length > 0 && x[i].className.includes(filter)) {
        searchKeyWord = searchKeyWord.toLowerCase()
        const guideTitle = getGuideTitle(x[i]).toLowerCase()
        const guideContent = getGuideContent(x[i]).toLowerCase()
        if (guideTitle.includes(searchKeyWord) || guideContent.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        } else {
          // displaySearchResults('Plants')
        }
        updateSearchResults(PLANTS, totalSearchResult)
      }
      if (!searchKeyWord && x[i].className.includes(filter) 
          && displayedPlantGuides <= initialDisplayedPlantGuides) {
        addClass(x[i], "show-html-element")
        hideSearchResults()
      };
    }
  }
  displaySearchResults('Plants')
}

function filterSystemGuides(filter, searchKeyWord='') {
  let displayedSystemGuides = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");
  if (filter == "all") filter = "";
  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];
    if (guideType == SYSTEMS) {
      if (x[i].className.includes(filter)) displayedSystemGuides += 1;
      removeClass(x[i], "show-html-element");
      if (searchKeyWord.length > 0 && x[i].className.includes(filter)) {
        searchKeyWord = searchKeyWord.toLowerCase()
        const guideTitle = getGuideTitle(x[i]).toLowerCase()
        const guideContent = getGuideContent(x[i]).toLowerCase()
        if (guideTitle.includes(searchKeyWord) || guideContent.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        } else {
          // displaySearchResults('Systems')
        }
        updateSearchResults(SYSTEMS, totalSearchResult)
      }
      if (!searchKeyWord && x[i].className.includes(filter) 
          && displayedSystemGuides <= initialDisplayedSystemGuides) {
        addClass(x[i], "show-html-element")
        hideSearchResults()
      };
    }
  }
  displaySearchResults('Systems')
}

function filterComponentGuides(filter, searchKeyWord='') {
  let displayedComponentGuides = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");
  if (filter == "all") filter = "";
  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];
    if (guideType == COMPONENTS) {
      if (x[i].className.includes(filter)) displayedComponentGuides += 1;
      removeClass(x[i], "show-html-element");
      if (searchKeyWord.length > 0 && x[i].className.includes(filter)) {
        searchKeyWord = searchKeyWord.toLowerCase()
        const guideTitle = getGuideTitle(x[i]).toLowerCase()
        const guideContent = getGuideContent(x[i]).toLowerCase()
        if (guideTitle.includes(searchKeyWord) || guideContent.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        } else {
          // displaySearchResults('Components')
        }
        updateSearchResults(COMPONENTS, totalSearchResult)
      }
      if (!searchKeyWord && x[i].className.includes(filter) 
          && displayedComponentGuides <= initialDisplayedComponentGuides) {
        addClass(x[i], "show-html-element")
        hideSearchResults()
      };
    }
  }
  displaySearchResults('Components')
}

/** 
 * Get the guide title
 * 
 * @param {object} parentHtmlElement
 * @return {string} guideTitle
 * **/
function getGuideTitle(parentHtmlElement) {
  const guideTitle = parentHtmlElement.children[0].children[0].children[1]
    .children[0].children[0].children[0].textContent;
  return guideTitle
}

function getGuideContent(parentHtmlElement) {
  const guideContent = parentHtmlElement.children[0].children[0].children[1]
    .children[0].children[0].children[1].textContent;
  return guideContent
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

function doSearchGuides(searchBarId) {
  let searchKeyword = getSearchKeywordValue(searchBarId)
  filterPlantGuides(plantsFilter, searchKeyword)
  filterSystemGuides(systemsFilter, searchKeyword)
  filterComponentGuides(componentsFilter, searchKeyword)
}

function getSearchKeywordValue(searchBarId) {
  let searchKeyWord = document.getElementById(searchBarId).value;
  searchKeyWord = searchKeyWord.trim();
  return searchKeyWord
}

function loadMoreGuides(guideType, incrementBy=4) {
  const expectedGuideTypes = [PLANTS, SYSTEMS, COMPONENTS]

  if (!expectedGuideTypes.includes(guideType)) return

  if (guideType == PLANTS) {
    initialDisplayedPlantGuides += incrementBy;
    filterPlantGuides(plantsFilter);
  } else if (guideType == SYSTEMS) {
    initialDisplayedSystemGuides += incrementBy;
    filterSystemGuides(systemsFilter)
  } else {
    initialDisplayedComponentGuides += incrementBy;
    filterComponentGuides(componentsFilter)
  }
}

function updateSearchResults(guideType, value) {
  const expectedGuideTypes = [PLANTS, SYSTEMS, COMPONENTS]

  if (!expectedGuideTypes.includes(guideType)) return
  const searchKeyWord = $('#guide-search-bar').val();

  if (guideType == PLANTS) {
    const totalPlantResults = $('#total-plants-search-result').text();
    const label = `Search Results: ${totalPlantResults} Plants related to "${searchKeyWord}"`

    $('#total-plants-search-result').text(value)
    $('#total-plants-search-result').show()
    updateGuideHeader(PLANTS, label)
  } else if (guideType == SYSTEMS) {
    const totalSystemResults = $('#total-systems-search-result').text();
    const label = `Search Results: ${totalSystemResults} Systems related to "${searchKeyWord}"`
    $('#total-systems-search-result').text(value)
    $('#total-systems-search-result').show()
    updateGuideHeader(SYSTEMS, label)
  } else {
    const totalComponentResults = $('#total-components-search-result').text();
    const label = `Search Results: ${totalComponentResults} Components related to "${searchKeyWord}"`
    $('#total-components-search-result').text(value)
    $('#total-components-search-result').show()
    updateGuideHeader(COMPONENTS, label)
  }
}

function hideSearchResults() {
  $('#total-plants-search-result').hide()
  $('#total-systems-search-result').hide()
  $('#total-components-search-result').hide()
}

function hideNoResultGuides() {
  $('#no-result-plants').hide()
  $('#no-result-systems').hide()
  $('#no-result-components').hide()
}

function displaySearchResults(guideType) {
  const _PLANTS = 'Plants';
  const _SYSTEMS = 'Systems';
  const _COMPONENTS = 'Components';
  if (guideType == _PLANTS) {
    if ($('#total-plants-search-result').text() == 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#Plants').attr('class').includes('active')) {
        $('#textPlants').hide()
        $('#no-result-plants').show()
        $('#no-result-systems').hide()
        $('#no-result-components').hide()
        $('#search-keyword-plants').text($('#guide-search-bar').val())
      } else {
        $('#no-result-plants').hide();
      }
    } else if ($('#total-plants-search-result').text() > 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#Plants').attr('class').includes('active')) {
        $('#textPlants').show();
        $('#no-result-systems').hide();
        $('#no-result-components').hide();
      }
      $('#no-result-plants').hide();
      $('#load-more-plants').hide();
    } else {
      updateGuideHeader(PLANTS, 'All Plants')
      if ($('#Plants').attr('class').includes('active')) {
        $('#textPlants').show()
        $('#load-more-plants').show()
      }
      $('#no-result-plants').hide()
    }
  }
  if (guideType == _SYSTEMS) {
    if ($('#total-systems-search-result').text() == 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#Systems').attr('class').includes('active')) {
        $('#textSystems').hide()
        $('#no-result-systems').show()
        $('#no-result-plants').hide()
        $('#no-result-components').hide()
        $('#search-keyword-systems').text($('#guide-search-bar').val())
      } else {
        $('#no-result-systems').hide();
      }
    } else if ($('#total-systems-search-result').text() > 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#Systems').attr('class').includes('active')) {
        $('#textSystems').show();
        $('#no-result-plants').hide();
        $('#no-result-components').hide();
      }
      $('#no-result-systems').hide();
    } else {
      updateGuideHeader(SYSTEMS, 'All Systems')
      if ($('#Systems').attr('class').includes('active')) {
        $('#textSystems').show()
        $('#load-more-systems').show()
      }
      $('#no-result-systems').hide();
    }
  }
  if (guideType == _COMPONENTS) {
    if ($('#total-components-search-result').text() == 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#Components').attr('class').includes('active')) {
        $('#textComponents').hide()
        $('#no-result-components').show()
        $('#no-result-plants').hide()
        $('#no-result-systems').hide()
        $('#search-keyword-components').text($('#guide-search-bar').val())
      }
      else {
        $('#no-result-components').hide();
      }
    } else if ($('#total-components-search-result').text() > 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#Components').attr('class').includes('active')) {
        $('#textComponents').show();
        $('#no-result-plants').hide();
        $('#no-result-systems').hide();
      }
      $('#no-result-components').hide();
    } else {
      updateGuideHeader(COMPONENTS, 'All Components')
      if ($('#Components').attr('class').includes('active')) {
        $('#textComponents').show()
        $('#load-more-components').show()
      }
      $('#no-result-components').hide()
    }
  }
}

function updateGuideHeader(guideType, label) {
  const expectedGuideTypes = [PLANTS, SYSTEMS, COMPONENTS];

  if (!expectedGuideTypes.includes(guideType)) return;

  const searchKeyWord = $('#guide-search-bar').val();

  if (guideType == PLANTS) {
    $('#guide-header-plants').text(label);
  } else if (guideType == SYSTEMS) {
    $('#guide-header-systems').text(label);
  } else {
    $('#guide-header-components').text(label);
  }
}