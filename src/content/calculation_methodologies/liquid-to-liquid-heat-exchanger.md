---
title:  Liquid-to-liquid Heat Exchanger
type: calculation
layout: calculation_methodology
calculation_methodology_id: 2
excerpt:  Loosely based on the 2020 ASHRAE Handbook – Systems and Equipment, Chapter 26 for air-to-air heat exchangers. Part of the methodology described in Chapter 26 is applicable in liquid-to-liquid heat transfer systems, specifically about sensible heat.
related_systems:
  - Water-Cooled Chiller
  - Waterside Economizer
related_components:
  - Liquid-to-Liquid Heat Exchanger
associated_calculators:
  - Calculator 1
  - Calculator 2
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=condenser-water-loop"
url: "/documents/calculation-methodology/liquid-to-liquid-heat-exchanger"
---

## Introduction

This is some text in this paragraph that comes before a tooltip. <span class="tooltip-pnp">This is example tooltip text that is in the form of a footnote in the source documents.<span class="tooltiptext">CUNY BPL recommends taking a sample of measurements and findthe average. The average value will be used to calculate annual energy consumption.As an example, the Onset HOBO 4-channel analog logger can measure a sample of current data at a predefined interval known as the sampling interval. If the logging interval is set to one-hour and the sampling interval is set to one-second, the logger will measure current every second for one hour then determinethe average. The average will be stored in the loggeras the one-hour interval measurement. This process will continue every hour for the duration of the measurement period</span></span> This is the rest of the text i this paraghraph.

This calculation methodology is loosely based on the 2020 ASHRAE Handbook – Systems and Equipment, Chapter 26 for air-to-air heat exchangers. Part of the methodology described in Chapter 26 is applicable in liquid-to-liquid heat transfer systems, specifically about sensible heat. There is no latent heat transfer in liquid-to-liquid heat exchangers (no moisture control) only sensible heat transfer which can be measured by monitoring the liquid’s temperature. If the temperature of the liquids in the system changes as they flow through the heat exchanger, heat transfer is happening.

This methodology is applicable for systems that have liquid-to-liquid heat exchangers such as waterside economizers, blowdown heat recovery, and condensate cooling systems. Although this calculator can be used to evaluate energy transfer by any fluids (e.g., refrigerants), water is the only fluid to be evaluated in this methodology.  Figure 1 shows an example of a plate and frame heat exchanger with the required measurement points. 

FIGURE 1

This methodology works with hourly data only and each measurement is taken at the start of the hour. If the system operates seasonally, measurements should be taken for the duration of the season at one-hour intervals. If the system is not weather dependent, then a minimum of six (6) weeks of hourly data is required for this methodology to work. 

The next section describes how to calculate sensible heat transfer.

## Heat Transfer Calculation

The following equations are used to calculate the sensible heat transferred by the heat exchanger for a full year. All data used in this section should be measured with data loggers. A list of data that is required is summarized in Table 1.

TABLE 1

1. Calculate the mass flow rate of fluid 1 leaving the heat exchanger for each hour interval.

FORMULA 1

Where,
 = hourly mass flow rate of fluid 1 leaving the heat exchanger (lbm/min)
 = hourly flow rate of fluid 1 leaving the heat exchanger (GPM)
 = density of water, 62 (lb/ft3)
 = unit conversion, GPM to ft3/min

 2. Heat transfer should be calculated only when the heat exchanger is operating. This can be determined by checking the temperature difference across the recovery system in both the supply side and waste heat stream side. Another condition is that water flow should exist across the heat exchanger.

 ...

## Additional Resources

For general information on Option A M&V guides, please read section 4.2 (starts on page 23) of “M&V Guidelines: Measurement and Verification for Performance-Based Contracts Version 4.0” from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2016/01/f28/mv_guide_4_0.pdf#page=23

## References

ASHRAE (2020) “2020 ASHRAE Handbook-HVAC Systems and Equipment” 