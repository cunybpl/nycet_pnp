var PLANTS = "plant";
var SYSTEMS = "system";
var COMPONENTS = "component";
var CALCULATIONS = 'calculation'
var MEASUREMENTS = 'measurement'
var initialDisplayedPlantGuides = 6;
var initialDisplayedSystemGuides = 6;
var initialDisplayedComponentGuides = 6;
var initialDisplayedCalculations = 6;
var initialDisplayedMeasurements = 6;

function filterPlantGuides(searchKeyWord='') {
  let displayedPlantGuides = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");

  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];
    const measurementType = getMeasurementTypes(x[i].classList);

    if (guideType == PLANTS) {
      if (measurementType.includes(searchKeyWord)) displayedPlantGuides += 1;

      removeClass(x[i], "show-html-element");

      if (searchKeyWord.length > 0) {
        searchKeyWord = searchKeyWord.toLowerCase()
        const guideTitle = getGuideTitle(x[i]).toLowerCase()
        const guideContent = getGuideContent(x[i]).toLowerCase()
        
        if (guideTitle.includes(searchKeyWord) 
            || guideContent.includes(searchKeyWord) 
            || measurementType.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        }
        updateSearchResults(PLANTS, totalSearchResult)
      }
      if (!searchKeyWord 
          && displayedPlantGuides <= initialDisplayedPlantGuides) {
        addClass(x[i], "show-html-element")
        hideSearchResults()
      };
    }
  }
  displaySearchResults('plants')
}

function filterSystemGuides(searchKeyWord='') {
  let displayedSystemGuides = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");

  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];
    const measurementType = getMeasurementTypes(x[i].classList);

    if (guideType == SYSTEMS) {
      if (measurementType.includes(searchKeyWord)) displayedSystemGuides += 1;

      removeClass(x[i], "show-html-element");

      if (searchKeyWord.length > 0) {
        searchKeyWord = searchKeyWord.toLowerCase()
        const guideTitle = getGuideTitle(x[i]).toLowerCase()
        const guideContent = getGuideContent(x[i]).toLowerCase()

        if (guideTitle.includes(searchKeyWord) 
            || guideContent.includes(searchKeyWord) 
            || measurementType.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        }

        updateSearchResults(SYSTEMS, totalSearchResult)
      }
      if (!searchKeyWord 
          && displayedSystemGuides <= initialDisplayedSystemGuides) {
        addClass(x[i], "show-html-element")
        hideSearchResults()
      };
    }
  }
  displaySearchResults('systems')
}

function filterComponentGuides(searchKeyWord='') {
  let displayedComponentGuides = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");

  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];
    const measurementType = getMeasurementTypes(x[i].classList);

    if (guideType == COMPONENTS) {
      if (measurementType.includes(searchKeyWord)) displayedComponentGuides += 1;

      removeClass(x[i], "show-html-element");
      
      if (searchKeyWord.length > 0) {
        searchKeyWord = searchKeyWord.toLowerCase()
        const guideTitle = getGuideTitle(x[i]).toLowerCase()
        const guideContent = getGuideContent(x[i]).toLowerCase()

        if (guideTitle.includes(searchKeyWord) 
            || guideContent.includes(searchKeyWord) 
            || measurementType.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        }

        updateSearchResults(COMPONENTS, totalSearchResult)
      }
      if (!searchKeyWord 
          && displayedComponentGuides <= initialDisplayedComponentGuides) {
        addClass(x[i], "show-html-element")
        hideSearchResults()
      };
    }
  }
  displaySearchResults('components')
}

function filterCalculations(searchKeyWord='') {
  let displayedCalculations = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");

  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];
    const measurementType = getMeasurementTypes(x[i].classList);

    if (guideType == CALCULATIONS) {
      if (measurementType.includes(searchKeyWord)) displayedCalculations += 1;

      removeClass(x[i], "show-html-element");

      if (searchKeyWord.length > 0) {
        searchKeyWord = searchKeyWord.toLowerCase()
        const guideTitle = getGuideTitle(x[i]).toLowerCase()
        const guideContent = getGuideContent(x[i]).toLowerCase()

        if (guideTitle.includes(searchKeyWord) 
            || guideContent.includes(searchKeyWord) 
            || measurementType.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        }

        updateSearchResults(CALCULATIONS, totalSearchResult)
      }
      if (!searchKeyWord  
          && displayedCalculations <= initialDisplayedCalculations) {
        addClass(x[i], "show-html-element")
        hideSearchResults()
      };
    }
  }
  displaySearchResults('Calculation Methodologies')
}

function filterMeasurements(searchKeyWord='') {
  let displayedMeasurements = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");

  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];
    const measurementType = getMeasurementTypes(x[i].classList);

    if (guideType == MEASUREMENTS) {
      if (measurementType.includes(searchKeyWord)) displayedMeasurements += 1;

      removeClass(x[i], "show-html-element");

      if (searchKeyWord.length > 0) {
        searchKeyWord = searchKeyWord.toLowerCase()
        const guideTitle = getGuideTitle(x[i]).toLowerCase()
        const guideContent = getGuideContent(x[i]).toLowerCase()

        if (guideTitle.includes(searchKeyWord) 
            || guideContent.includes(searchKeyWord) 
            || measurementType.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        }
        updateSearchResults(MEASUREMENTS, totalSearchResult)
      }
      if (!searchKeyWord 
          && displayedMeasurements <= initialDisplayedMeasurements) {
        addClass(x[i], "show-html-element")
        hideSearchResults()
      };
    }
  }
  displaySearchResults('Measurement Techniques')
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

function getMeasurementTypes(classList) {
  arr = [...classList]
  arr = arr.filter((element) => {
    return element != "col-md-12" && element != "col-lg-6" && element != "guide-card" 
  })
  arr = arr.map(element => {
    return element.replace(",", "")
  });
  return arr
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
  filterPlantGuides(searchKeyword)
  filterSystemGuides(searchKeyword)
  filterComponentGuides(searchKeyword)
  filterCalculations(searchKeyword)
  filterMeasurements(searchKeyword)
}

function getSearchKeywordValue(searchBarId) {
  let searchKeyWord = document.getElementById(searchBarId).value;
  searchKeyWord = searchKeyWord.trim();
  return searchKeyWord
}

function loadMoreGuides(guideType, incrementBy=4) {
  const expectedGuideTypes = [PLANTS, SYSTEMS, COMPONENTS, 
    CALCULATIONS, MEASUREMENTS]

  if (!expectedGuideTypes.includes(guideType)) return

  if (guideType == PLANTS) {
    initialDisplayedPlantGuides += incrementBy;
    filterPlantGuides();
  }
  if (guideType == SYSTEMS) {
    initialDisplayedSystemGuides += incrementBy;
    filterSystemGuides()
  }
  if (guideType == COMPONENTS) {
    initialDisplayedComponentGuides += incrementBy;
    filterComponentGuides()
  }
  if (guideType == CALCULATIONS) {
    initialDisplayedCalculations += incrementBy;
    filterCalculations()
  }
  if (guideType == MEASUREMENTS) {
    initialDisplayedMeasurements += incrementBy;
    filterMeasurements()
  }
}

function updateSearchResults(guideType, value) {
  const expectedGuideTypes = [PLANTS, SYSTEMS, COMPONENTS, 
    CALCULATIONS, MEASUREMENTS]

  if (!expectedGuideTypes.includes(guideType)) return
  const searchKeyWord = $('#guide-search-bar').val();

  if (guideType == PLANTS) {
    const label = `Search Results: ${value} Plants related to "${searchKeyWord}"`

    $('#total-plants-search-result').text(value)
    $('#total-plants-search-result').show()
    updateGuideHeader(PLANTS, label)
  }
  if (guideType == SYSTEMS) {
    const label = `Search Results: ${value} Systems related to "${searchKeyWord}"`

    $('#total-systems-search-result').text(value)
    $('#total-systems-search-result').show()
    updateGuideHeader(SYSTEMS, label)
  }
  if (guideType == COMPONENTS) {
    const label = `Search Results: ${value} Components related to "${searchKeyWord}"`
    
    $('#total-components-search-result').text(value)
    $('#total-components-search-result').show()
    updateGuideHeader(COMPONENTS, label)
  }
  if (guideType == CALCULATIONS) {
    const label = `Search Results: ${value} Calculation methodologies related to "${searchKeyWord}"`
    
    $('#total-calculations-search-result').text(value)
    $('#total-calculations-search-result').show()
    updateGuideHeader(CALCULATIONS, label)
  }
  if (guideType == MEASUREMENTS) {
    const label = `Search Results: ${value} Measurement techniques related to "${searchKeyWord}"`
    
    $('#total-measurements-search-result').text(value)
    $('#total-measurements-search-result').show()
    updateGuideHeader(MEASUREMENTS, label)
  }
  
}

function hideSearchResults() {
  $('#total-plants-search-result').hide()
  $('#total-systems-search-result').hide()
  $('#total-components-search-result').hide()
  $('#total-calculations-search-result').hide()
  $('#total-measurements-search-result').hide()
}

function hideNoResultGuides() {
  $('#no-result-plants').hide()
  $('#no-result-systems').hide()
  $('#no-result-components').hide()
  $('#no-result-calculations').hide()
  $('#no-result-measurements').hide()
}

function displaySearchResults(guideType) {
  const _PLANTS = 'plants';
  const _SYSTEMS = 'systems';
  const _COMPONENTS = 'components';
  const _CALCULATIONS = 'calculations'
  const _MEASUREMENTS = 'measurements'

  if (guideType == _PLANTS) {
    if ($('#total-plants-search-result').text() == 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#plants').attr('class').includes('active')) {
        $('#textPlants').hide()
        $('#no-result-plants').show()
        $('#no-result-systems').hide()
        $('#no-result-components').hide()
        $('#no-result-measurements').hide();
        $('#no-result-calculations').hide();
        $('#search-keyword-plants').text($('#guide-search-bar').val())
      } else {
        $('#no-result-plants').hide();
      }
    } else if ($('#total-plants-search-result').text() > 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#plants').attr('class').includes('active')) {
        $('#textPlants').show();
        $('#no-result-systems').hide();
        $('#no-result-components').hide();
        $('#no-result-measurements').hide();
        $('#no-result-calculations').hide();
      }
      $('#no-result-plants').hide();
      $('#load-more-plants').hide();
    } else {
      updateGuideHeader(PLANTS, 'All Plants')
      if ($('#plants').attr('class').includes('active')) {
        $('#textPlants').show()
        $('#load-more-plants').show()
      }
      $('#no-result-plants').hide()
    }
  }
  if (guideType == _SYSTEMS) {
    if ($('#total-systems-search-result').text() == 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#systems').attr('class').includes('active')) {
        $('#textSystems').hide()
        $('#no-result-systems').show()
        $('#no-result-plants').hide()
        $('#no-result-components').hide()
        $('#no-result-measurements').hide();
        $('#no-result-calculations').hide();
        $('#search-keyword-systems').text($('#guide-search-bar').val())
      } else {
        $('#no-result-systems').hide();
      }
    } else if ($('#total-systems-search-result').text() > 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#systems').attr('class').includes('active')) {
        $('#textSystems').show();
        $('#no-result-plants').hide();
        $('#no-result-components').hide();
        $('#no-result-measurements').hide();
        $('#no-result-calculations').hide();
      }
      $('#no-result-systems').hide();
    } else {
      updateGuideHeader(SYSTEMS, 'All Systems')
      if ($('#systems').attr('class').includes('active')) {
        $('#textSystems').show()
        $('#load-more-systems').show()
      }
      $('#no-result-systems').hide();
    }
  }
  if (guideType == _COMPONENTS) {
    if ($('#total-components-search-result').text() == 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#components').attr('class').includes('active')) {
        $('#textComponents').hide()
        $('#no-result-components').show()
        $('#no-result-plants').hide()
        $('#no-result-systems').hide()
        $('#no-result-measurements').hide();
        $('#no-result-calculations').hide();
        $('#search-keyword-components').text($('#guide-search-bar').val())
      }
      else {
        $('#no-result-components').hide();
      }
    } else if ($('#total-components-search-result').text() > 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#components').attr('class').includes('active')) {
        $('#textComponents').show();
        $('#no-result-plants').hide();
        $('#no-result-systems').hide();
        $('#no-result-measurements').hide();
        $('#no-result-calculations').hide();
      }
      $('#no-result-components').hide();
    } else {
      updateGuideHeader(COMPONENTS, 'All Components')
      if ($('#components').attr('class').includes('active')) {
        $('#textComponents').show()
        $('#load-more-components').show()
      }
      $('#no-result-components').hide()
    }
  }
  if (guideType == _CALCULATIONS) {
    if ($('#total-calculations-search-result').text() == 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#calculations').attr('class').includes('active')) {
        $('#textCalculations').hide()
        $('#no-result-calculations').show()
        $('#no-result-plants').hide()
        $('#no-result-systems').hide()
        $('#no-result-components').hide()
        $('#no-result-measurements').hide();
        $('#search-keyword-calculations').text($('#guide-search-bar').val())
      }
      else {
        $('#no-result-calculations').hide();
      }
    } else if ($('#total-calculations-search-result').text() > 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#calculations').attr('class').includes('active')) {
        $('#textCalculations').show();
        $('#no-result-plants').hide();
        $('#no-result-systems').hide();
        $('#no-result-components').hide();
        $('#no-result-measurements').hide();
      }
      $('#no-result-calculations').hide();
    } else {
      updateGuideHeader(CALCULATIONS, 'All Calculation Methodologies')
      if ($('#calculations').attr('class').includes('active')) {
        $('#textCalculations').show()
        $('#load-more-calculations').show()
      }
      $('#no-result-calculations').hide()
    }
  }
  if (guideType == _MEASUREMENTS) {
    // measurements
    if ($('#total-measurements-search-result').text() == 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#measurements').attr('class').includes('active')) {
        $('#textMeasurements').hide()
        $('#no-result-measurements').show()
        $('#no-result-plants').hide()
        $('#no-result-systems').hide()
        $('#no-result-components').hide()
        $('#no-result-calculations').hide();
        $('#search-keyword-measurements').text($('#guide-search-bar').val())
      }
      else {
        $('#no-result-measurements').hide();
      }
    } else if ($('#total-measurements-search-result').text() > 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#measurements').attr('class').includes('active')) {
        $('#textMeasurements').show();
        $('#no-result-plants').hide();
        $('#no-result-systems').hide();
        $('#no-result-components').hide();
        $('#no-result-calculations').hide();
      }
      $('#no-result-measurements').hide();
    } else {
      updateGuideHeader(CALCULATIONS, 'All Calculation Methodologies')
      if ($('#measurements').attr('class').includes('active')) {
        $('#textMeasurements').show()
        $('#load-more-measurements').show()
      }
      $('#no-result-measurements').hide()
    }
  }
}

function updateGuideHeader(guideType, label) {
  const expectedGuideTypes = [PLANTS, SYSTEMS, COMPONENTS, CALCULATIONS, MEASUREMENTS];

  if (!expectedGuideTypes.includes(guideType)) return;

  const searchKeyWord = $('#guide-search-bar').val();

  if (guideType == PLANTS) {
    $('#guide-header-plants').text(label);
  }

  if (guideType == SYSTEMS) {
    $('#guide-header-systems').text(label);
  }

  if (guideType == COMPONENTS) {
    $('#guide-header-components').text(label);
  }

  if (guideType == CALCULATIONS) {
    $('#guide-header-calculations').text(label);
  }

  if (guideType == MEASUREMENTS) {
    $('#guide-header-measurements').text(label);
  }
}

$('.open-popup-link').magnificPopup({
  type:'image'
});
