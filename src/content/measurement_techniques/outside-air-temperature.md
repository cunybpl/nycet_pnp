---
title: Outside Air Temperature
type: measurement
layout: measurement_technique
measurement_technique_id: 6
excerpt: This technique uses weatherproof data loggers to take long-term measurements of the outside air temperature (OAT) (OF) at one-hour intervals.
related_systems:
  - Water Chooled Chiller
  - Condenser Water Loop
  - Chilled Water Loop 
  - Hot Water Loop
  - Steam Condensate Recovery
  - Steam Distribution
  - Constant-speed, Constant-volume Air Handling Unit
  - Dual-speed Air Handling Unit
  - Variable-speed, Variable-volume Air Handling Unit
related_components:
  - Variable-speed, Variable-volume Pump and Motor
  - Variable-speed, Variable-volume Fan and Motor
  - Variable-speed, Variable-volume Compressor and Motor 
  - Constant-speed, Constant-volume Pump and Motor
  - Liquid-to-air Heat Exchanger
  - Air-to-air Heat Exchanger
url: "/documents/measurement-technique/outside-air-temperature"
---

## Description of Outside Air Temperature (OAT)

This technique uses weatherproof data loggers to take long-term measurements of the outside air temperature (OAT) (OF) at one-hour intervals. This technique can be used to characterize the cooling or heating load for any temperature-dependent system such as chillers, boilers, variable speed air handling units and ventilation systems. Accurate measurements can only be taken when data loggers are properly installed.  

Measurements should be taken at one-hour intervals and will provide insight into the temperature values which are driving the control mechanisms of the building equipment. OAT should be paired with other information about the specific systems’ operating conditions in order to calculate annual energy consumption. For more information about how this data is used to estimate annual energy consumption, please refer to the calculation methodology of the type of equipment that relies on the outside air temperature.  

The duration of the long-term measurement should be a minimum of six weeks and data should be collected at one-hour intervals. Measurements should be taken in conjunction with when the system of interest is operating under normal conditions. 

### Type of Measurement

Direct

## Equipment

The measurement equipment needed for this procedure is a temperature logger (or a combined temperature and humidity data logger). Refer to the [Fell Catalog](https://nycenergytools.com/equipment/) to identify weatherproof data loggers that measure outside air temperature. The contents of this guide are largely based off of the [Onset Hobo MX2301](https://nycenergytools.com/equipment/temp-rh-mx2301/) logger, which can be found and borrowed through FELL.  

If the logger is installed outdoors, avoid locations with too much sunlight because the logger will measure higher temperatures. Data loggers can be installed inside the ductwork of an air handling unit (AHU) or ventilation system so long as the airstream entering the unit is outside air. The logger must be placed as close as possible to the location where the outside air stream is entering the ductwork. 

The temperature data measured by the logger should be collected as hourly average values and not instantaneous. With this method, the logger will detect temperature fluctuations across the hour and store the average value of those fluctuations, rather than the measured temperature value at an instantaneous point in time (which does not account for those changes).  

Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.  

## Measurement Steps

### 1. Preparation for Data Acquisition

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. 

<ul>
<li>Logging interval: 1-hour</li>
<li>Date and time to start logging</li> 
<li>Date and time to stop logging </li>
<li>Values to measure: Temperature (OF), Relative Humidity (%) if necessary</li> 
<li>Sampling interval: 1-second </li>
</ul>

<a href="https://www.youtube.com/embed/D178xIAkoUA?si=2dEZ_k-hlvfSiECA">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/outside-air-temperature/outside air temperature figure 1.png" class="figure-img img-fluid rounded zoom" alt="Figure 1. How to configure on HOBOConnect.">
  <figcaption class="figure-caption text-left">Figure 1. How to configures on HOBOConnect.</figcaption>
</figure>
</a>

### 2. Installation of Equipment

<ul>
<li>Confirm that the outside air dampers are open and that there is outside air intake in the duct (if installing the logger directly in an AHU).</li>  
<li>Place the logger in the outside air duct or outdoors and away from direct sunlight.</li> 
<li>Confirm that the logger is recording, and that the sensor is accurately identifying the outside air temperature. If the logger has a screen check the temperature value on the logger screen. If the logger does not have a screen then use the software to connect to the logger and check the temperature it detects.</li>
<li><strong>Do not move the logger after it has been installed.</strong></li>  
</ul>

<a href="https://www.youtube.com/watch?v=R9MDkohMD-E&list=PL-NERcBsKg4Uo8mxaFa8glUd_X4-bd0R7&index=2">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/outside-air-temperature/outside air temperature figure 2.png" class="figure-img img-fluid rounded zoom" alt="Figure 2. Onset HOBO MX2301 installed next to the outside air damper in the ductwork of an AHU.">
  <figcaption class="figure-caption text-left">Figure 2. Onset HOBO MX2301 installed next to the outside air damper in the ductwork of an AHU.</figcaption>
</figure>
</a>

<a href="https://www.youtube.com/watch?v=R9MDkohMD-E&list=PL-NERcBsKg4Uo8mxaFa8glUd_X4-bd0R7&index=2">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/outside-air-temperature/outside air temperature figure 3.png" class="figure-img img-fluid rounded zoom" alt="Figure 3. Onset HOBO MX2301 logger installed outdoors with zip ties.">
  <figcaption class="figure-caption text-left">Figure 3. Onset HOBO MX2301 installed outdoores with zip ties</figcaption>
</figure>
</a>

### 3. Verify Data is Being Collected

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following: 

<ul>
<li><strong>Do not remove the logger. (If you remove the logger, you may need to start over with the setup and installation process.)</li></strong>  
<li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.</li>  
<li>Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.</li>   
<li>Determine if the measured results align with the expected OAT values based on observed weather trends or known outside air damper schedules.</li>  
</ul>

<a href="https://www.youtube.com/watch?v=EOb9EqQcRXY&list=PL-NERcBsKg4Uo8mxaFa8glUd_X4-bd0R7&index=3">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/outside-air-temperature/outside air temperature figure 4.png" class="figure-img img-fluid rounded zoom" alt="Figure 4. Plot graph of OAT data from the Onset HOBO MX2301 logger. Software used is HOBOConnect.">
  <figcaption class="figure-caption text-left">Figure 4. Plot graph of OAT data from the Onset HOBO MX2301 logger. Software used is HOBOConnect.</figcaption>
</figure>
</a>

### 4. Retrieve Measurement Equipment and Download All Final Data

After verifying that the logger is collecting data, do the following:  
<ul>
<li>Allow the logger to collect data for the remainder of the measurement period.</li> 
<li>After the measurement period has concluded, remove the logger.</li>  
<li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the logger via Bluetooth.</li>  
<li>Use the proprietary software to Stop the logger and end data collection.</li>  
<li>Download all data from the logger and save the file in the.csv file format for analysis.</li> 
</ul>

<a href="https://www.youtube.com/watch?v=sF_c_7LHR5s&list=PL-NERcBsKg4Uo8mxaFa8glUd_X4-bd0R7&index=4">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/outside-air-temperature/outside air temperature figure 5.png" class="figure-img img-fluid rounded zoom" alt="Figure 5. Final data table. Data was extracted from the logger using HOBOConnect and exported for analysis.">
  <figcaption class="figure-caption text-left">Figure 5. Final data table. Data was extracted from the logger using HOBOConnect and exported for analysis.</figcaption>
</figure>
</a>

## Troubleshooting

<strong>Problem 1:</strong> Logger is measuring unexpected values

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> If the ambient temperature reading is higher or lower than expected, adjust the placement of the logger.
</div>
 
<strong>Problem 2:</strong> Logger screen is blank

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> The logger might have an energy saving feature that conserves battery life by turning off the screen. Try pressing one of the logger buttons or connecting to it with your phone or laptop.​ If the screen remains blank, then try replacing the battery otherwise reach out to our equipment specialist for a replacement.
</div>