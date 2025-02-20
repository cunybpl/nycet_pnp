var PLANTS = "plant";
var SYSTEMS = "system";
var COMPONENTS = "component";
var CALCULATIONS = "calculation";
var MEASUREMENTS = "measurement";
var SOOS = "soo";
var initialDisplayedPlantGuides = 10;
var initialDisplayedSystemGuides = 20;
var initialDisplayedComponentGuides = 8;
var initialDisplayedCalculations = 8;
var initialDisplayedMeasurements = 20;
var initialDisplayedSooGuides = 8;

function filterPlantGuides(searchKeyWord='') {
  let totalPlantGuides = 0;
  let displayedPlantGuides = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");

  // Get the total plant guides
  for (i = 0; i < x.length; i++) {
    let type = x[i].id.split("-")[0];
    if (type == PLANTS) totalPlantGuides += 1;
  }

  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];
    const measurementType = getMeasurementTypes(x[i].classList);

    if (guideType == PLANTS) {
      displayedPlantGuides += 1;

      removeClass(x[i], "show-html-element");
      let measurementType = getMeasurementTypes(x[i].classList);
      measurementType = measurementType.map(element => {
        return cleanKeyword(element)
      });

      if (searchKeyWord.length > 0) {
        searchKeyWord = cleanKeyword(searchKeyWord)
        const guideTitle = cleanKeyword(getGuideTitle(x[i]).toLowerCase())
        const guideContent = cleanKeyword(getGuideContent(x[i]).toLowerCase())
        
        if (measurementType.includes(searchKeyWord)
            || guideTitle.includes(searchKeyWord)
            || guideContent.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        }
        updateSearchResults(PLANTS, totalSearchResult)
      }
      if (!searchKeyWord 
          && displayedPlantGuides <= initialDisplayedPlantGuides) {
            addClass(x[i], "show-html-element")
            hideSearchResults()
            if (displayedPlantGuides >= totalPlantGuides) {
              hideLoadMoreButton(PLANTS);
            }
      };
    }
  }
  displaySearchResults('plants');
  toggleGroupHeaders('plants');
}

function filterSystemGuides(searchKeyWord='') {
  let totalSystemGuides = 0;
  let displayedSystemGuides = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");

  // This loop is to get the total system guides
  for (i = 0; i < x.length; i++) {
    let type = x[i].id.split("-")[0];
    if (type == SYSTEMS) totalSystemGuides += 1;
  }

  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];

    if (guideType == SYSTEMS) {
      displayedSystemGuides += 1;

      removeClass(x[i], "show-html-element");
      let measurementType = getMeasurementTypes(x[i].classList);
      measurementType = measurementType.map(element => {
        return cleanKeyword(element)
      });

      if (searchKeyWord.length > 0) {
        searchKeyWord = cleanKeyword(searchKeyWord)
        const guideTitle = cleanKeyword(getGuideTitle(x[i]).toLowerCase())
        const guideContent = cleanKeyword(getGuideContent(x[i]).toLowerCase())

        if (measurementType.includes(searchKeyWord)
            || guideTitle.includes(searchKeyWord)
            || guideContent.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        }

        updateSearchResults(SYSTEMS, totalSearchResult)
      }
      if (!searchKeyWord 
          && displayedSystemGuides <= initialDisplayedSystemGuides) {
            addClass(x[i], "show-html-element")
            hideSearchResults()
            if (displayedSystemGuides >= totalSystemGuides) {
              hideLoadMoreButton(SYSTEMS);
            }
      };
    }
  }
  displaySearchResults('systems');
  toggleGroupHeaders('systems');
}

function filterComponentGuides(searchKeyWord='') {
  let totalComponentGuides = 0;
  let displayedComponentGuides = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");

  // This loop is to get the total component guides
  for (i = 0; i < x.length; i++) {
    let type = x[i].id.split("-")[0];
    if (type == COMPONENTS) totalComponentGuides += 1;
  }

  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];

    if (guideType == COMPONENTS) {
      displayedComponentGuides += 1;

      removeClass(x[i], "show-html-element");
      let measurementType = getMeasurementTypes(x[i].classList);
      measurementType = measurementType.map(element => {
        return cleanKeyword(element)
      });
      if (searchKeyWord.length > 0) {
        searchKeyWord = cleanKeyword(searchKeyWord)
        const guideTitle = cleanKeyword(getGuideTitle(x[i]).toLowerCase())
        const guideContent = cleanKeyword(getGuideContent(x[i]).toLowerCase())

        if (measurementType.includes(searchKeyWord)
            || guideTitle.includes(searchKeyWord)
            || guideContent.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        }

        updateSearchResults(COMPONENTS, totalSearchResult)
      }
      if (!searchKeyWord 
          && displayedComponentGuides <= initialDisplayedComponentGuides) {
            addClass(x[i], "show-html-element")
            hideSearchResults()
            if (displayedComponentGuides >= totalComponentGuides) {
              hideLoadMoreButton(COMPONENTS);
            }
      };
    }
  }
  displaySearchResults('components');
  toggleGroupHeaders('components');
}

function filterCalculations(searchKeyWord='') {
  let totalCalculationGuides = 0;
  let displayedCalculations = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");

  // This loop is to get the total calculation methodologies
  for (i = 0; i < x.length; i++) {
    let type = x[i].id.split("-")[0];
    if (type == CALCULATIONS) totalCalculationGuides += 1;
  }

  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];
    

    if (guideType == CALCULATIONS) {
      displayedCalculations += 1;

      removeClass(x[i], "show-html-element");
      let measurementType = getMeasurementTypes(x[i].classList);
      measurementType = measurementType.map(element => {
        return cleanKeyword(element)
      });

      if (searchKeyWord.length > 0) {
        searchKeyWord = cleanKeyword(searchKeyWord)
        const guideTitle = cleanKeyword(getGuideTitle(x[i]).toLowerCase())
        const guideContent = cleanKeyword(getGuideContent(x[i]).toLowerCase())

        if (measurementType.includes(searchKeyWord)
            || guideTitle.includes(searchKeyWord)
            || guideContent.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        }

        updateSearchResults(CALCULATIONS, totalSearchResult)
      }
      if (!searchKeyWord  
          && displayedCalculations <= initialDisplayedCalculations) {
            addClass(x[i], "show-html-element")
            hideSearchResults()
            if (displayedCalculations >= totalCalculationGuides) {
              hideLoadMoreButton(CALCULATIONS);
            }
      };
    }
  }
  displaySearchResults('Calculations');
  toggleGroupHeaders('calculations');
}

function filterMeasurements(searchKeyWord='') {
  let totalMeasurementGuides = 0;
  let displayedMeasurements = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");

  // This loop is to get the total measurement techniques
  for (i = 0; i < x.length; i++) {
    let type = x[i].id.split("-")[0];
    if (type == MEASUREMENTS) totalMeasurementGuides += 1;
  }

  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];

    if (guideType == MEASUREMENTS) {
      displayedMeasurements += 1;

      removeClass(x[i], "show-html-element");
      let measurementType = getMeasurementTypes(x[i].classList);
      measurementType = measurementType.map(element => {
        return cleanKeyword(element)
      });

      if (searchKeyWord.length > 0) {
        searchKeyWord = cleanKeyword(searchKeyWord)
        const guideTitle = getGuideTitle(x[i]).toLowerCase()
        const guideContent = getGuideContent(x[i]).toLowerCase()

        if (measurementType.includes(searchKeyWord)
            || guideTitle.includes(searchKeyWord)
            || guideContent.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        }
        updateSearchResults(MEASUREMENTS, totalSearchResult)
        hideLoadMoreButton(MEASUREMENTS);
      }
      if (!searchKeyWord 
          && displayedMeasurements <= initialDisplayedMeasurements) {
            addClass(x[i], "show-html-element")
            hideSearchResults()
            if (displayedMeasurements >= totalMeasurementGuides) {
              hideLoadMoreButton(MEASUREMENTS);
            }
      };
    }
  }
  displaySearchResults('Measurements');
  toggleGroupHeaders('measurements');
}

function filterSooGuides(searchKeyWord='') {
  let totalSooGuides = 0;
  let displayedSooGuides = 0;
  let totalSearchResult = 0;
  var x, i;
  x = document.getElementsByClassName("guide-card");

  // This loop is to get the total soo guides
  for (i = 0; i < x.length; i++) {
    let type = x[i].id.split("-")[0];
    if (type == SOOS) totalSooGuides += 1;
  }

  for (i = 0; i < x.length; i++) {
    let htmlElementId = x[i].id;
    let guideType = htmlElementId.split("-")[0];

    if (guideType == SOOS) {
      displayedSooGuides += 1;

      removeClass(x[i], "show-html-element");
      let measurementType = getMeasurementTypes(x[i].classList);
      measurementType = measurementType.map(element => {
        return cleanKeyword(element)
      });
      if (searchKeyWord.length > 0) {
        searchKeyWord = cleanKeyword(searchKeyWord)
        const guideTitle = cleanKeyword(getGuideTitle(x[i]).toLowerCase())
        const guideContent = cleanKeyword(getGuideContent(x[i]).toLowerCase())

        if (measurementType.includes(searchKeyWord)
            || guideTitle.includes(searchKeyWord)
            || guideContent.includes(searchKeyWord)) {
          totalSearchResult += 1;
          addClass(x[i], "show-html-element")
        }

        updateSearchResults(SOOS, totalSearchResult)
      }
      if (!searchKeyWord 
          && displayedSooGuides <= initialDisplayedSooGuides) {
            addClass(x[i], "show-html-element")
            hideSearchResults()
            if (displayedSooGuides >= totalSooGuides) {
              hideLoadMoreButton(SOOS);
            }
      };
    }
  }
  displaySearchResults('soos');
  toggleGroupHeaders('soos');
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

/**
 * Facade for performing the search action to guides, measurement techniques,
 * calculation methodologies and soos.
 * 
 * @param {string} searchBarId HTML element id of the search bar. 
 */
function doSearchGuides(searchBarId) {
  let keyword = document.getElementById(searchBarId).value;
  keyword = cleanKeyword(keyword)
  filterPlantGuides(keyword)
  filterSystemGuides(keyword)
  filterComponentGuides(keyword)
  filterCalculations(keyword)
  filterMeasurements(keyword)
  filterSooGuides(keyword)
}

function loadMoreGuides(guideType, incrementBy=6) {
  const expectedGuideTypes = [PLANTS, SYSTEMS, COMPONENTS, 
    CALCULATIONS, MEASUREMENTS, SOOS]

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
  if (guideType == SOOS) {
    initialDisplayedSooGuides += incrementBy;
    filterSooGuides()
  }
}

function updateSearchResults(guideType, value) {
  const expectedGuideTypes = [PLANTS, SYSTEMS, COMPONENTS, 
    CALCULATIONS, MEASUREMENTS, SOOS]

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
    const label = `Search Results: ${value} Calculations related to "${searchKeyWord}"`
    
    $('#total-calculations-search-result').text(value)
    $('#total-calculations-search-result').show()
    updateGuideHeader(CALCULATIONS, label)
  }
  if (guideType == MEASUREMENTS) {
    const label = `Search Results: ${value} Measurements related to "${searchKeyWord}"`
    
    $('#total-measurements-search-result').text(value)
    $('#total-measurements-search-result').show()
    updateGuideHeader(MEASUREMENTS, label)
  }
  if (guideType == SOOS) {
    const label = `Search Results: ${value} Sequence of Operations related to "${searchKeyWord}"`
    
    $('#total-soos-search-result').text(value)
    $('#total-soos-search-result').show()
    updateGuideHeader(SOOS, label)
  }
  
}

function hideSearchResults() {
  $('#total-plants-search-result').hide()
  $('#total-systems-search-result').hide()
  $('#total-components-search-result').hide()
  $('#total-calculations-search-result').hide()
  $('#total-measurements-search-result').hide()
  $('#total-soos-search-result').hide()
}

function hideNoResultGuides() {
  $('#no-result-plants').hide()
  $('#no-result-systems').hide()
  $('#no-result-components').hide()
  $('#no-result-calculations').hide()
  $('#no-result-measurements').hide()
  $('#no-result-soos').hide()
}

function hideLoadMoreButton(id) {
  $(`#load-more-container-${id}`).hide()
}

function displaySearchResults(guideType) {
  const _PLANTS = 'plants';
  const _SYSTEMS = 'systems';
  const _COMPONENTS = 'components';
  const _CALCULATIONS = 'calculations'
  const _MEASUREMENTS = 'measurements'
  const _SOOS = 'soos'

  if (guideType == _PLANTS) {
    if ($('#total-plants-search-result').text() == 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#plants').attr('class').includes('active')) {
        $('#textPlants').hide()
        $('#no-result-plants').show()
        $('#no-result-systems').hide()
        $('#no-result-components').hide()
        $('#no-result-measurements').hide();
        $('#no-result-calculations').hide();
        $('#no-result-soos').hide();
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
        $('#no-result-soos').hide();
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
        $('#no-result-soos').hide();
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
        $('#no-result-soos').hide();
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
        $('#no-result-soos').hide();
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
        $('#no-result-soos').hide();
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
        $('#no-result-soos').hide();
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
        $('#no-result-soos').hide();
      }
      $('#no-result-calculations').hide();
    } else {
      updateGuideHeader(CALCULATIONS, 'All Calculations')
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
        $('#no-result-soos').hide();
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
        $('#no-result-soos').hide();
      }
      $('#no-result-measurements').hide();
    } else {
      updateGuideHeader(MEASUREMENTS, 'All Measurements')
      if ($('#measurements').attr('class').includes('active')) {
        $('#textMeasurements').show()
        $('#load-more-measurements').show()
      }
      $('#no-result-measurements').hide()
    }
  }
  if (guideType == _SOOS) {
    // soos
    if ($('#total-soos-search-result').text() == 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#soos').attr('class').includes('active')) {
        $('#textSoos').hide()
        $('#no-result-soos').show()
        $('#no-result-plants').hide()
        $('#no-result-systems').hide()
        $('#no-result-components').hide();
        $('#no-result-measurements').hide();
        $('#no-result-calculations').hide();
        $('#search-keyword-soos').text($('#guide-search-bar').val())
      }
      else {
        $('#no-result-soos').hide();
      }
    } else if ($('#total-soos-search-result').text() > 0 && $('#guide-search-bar').val().length > 0) {
      if ($('#soos').attr('class').includes('active')) {
        $('#textSoos').show();
        $('#no-result-plants').hide();
        $('#no-result-systems').hide();
        $('#no-result-components').hide();
        $('#no-result-measurements').hide();
        $('#no-result-calculations').hide();
      }
      $('#no-result-soos').hide();
    } else {
      updateGuideHeader(SOOS, 'All Sequences of Operations')
      if ($('#soos').attr('class').includes('active')) {
        $('#textSoos').show()
        $('#load-more-soos').show()
      }
      $('#no-result-soos').hide()
    }
  }
}

function updateGuideHeader(guideType, label) {
  const expectedGuideTypes = [PLANTS, SYSTEMS, COMPONENTS, CALCULATIONS, MEASUREMENTS, SOOS];

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

  if (guideType == SOOS) {
    $('#guide-header-soos').text(label);
  }
}

function cleanKeyword(keyword) {
  return keyword
    .replace(/[\-]/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
}

function toggleGroupHeaders(guideType) {
  const groupHeaders = document.querySelectorAll(`section#text${capitalizeFirstLetter(guideType)} .group-header`);
  groupHeaders.forEach(header => {
    const group = header.nextElementSibling;
    const visibleCards = group.querySelectorAll('.guide-card.show-html-element');
    if (visibleCards.length > 0) {
      header.style.display = 'block';
      group.style.display = 'flex';
    } else {
      header.style.display = 'none';
      group.style.display = 'none';
    }
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

$('.open-popup-link').magnificPopup({
  type:'image'
});
