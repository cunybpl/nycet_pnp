---
title: Relative Humidity
type: measurement
layout: measurement_technique
measurement_technique_id: 8
excerpt: This technique uses data loggers to measure ments of relative humidity (% RH) of outdoor air and air handling units air streams at one-hour intervals.
thumbnail_image: "/images/measurement-technique/relative-humidity/2024_0410_relative humidity MT_thumbnail.jpeg"
related_systems:
related_components:
url: "/documents/measurement-technique/relative-humidity"
---

## Description of Relative Humidity

This technique uses data loggers to take long-term measurements of relative humidity (% RH) at one-hour intervals. This technique can be used to characterize the performance of heat/energy recovery ventilators. Data is used for calculations such as regression models to estimate the heat and energy recovered by an air-to-air heat/energy recovery system. For a more detailed description of how relative humidity data is used in calculations please refer to the PnP-S-16 - Air-to-Air Energy Recovery System and calculation methodology of the system being measured.

Relative humidity measurements should be taken at one-hour intervals and should be paired with the temperature of the system if both variables are required to characterize performance. Measurements should be taken at one-hour average interval and not instantaneous values. When taking one-hour measurements, the logger will detect humidity several times every hour and store the average value. Sometimes humidity can fluctuate over a one-hour period, but the instantaneous value will not indicate that change.  

The duration of the long-term measurement should be a minimum of six weeks. Measurements should be when the system of interest is operating under normal conditions. 

### Type of Measurement

Direct 

### Equipment 

The measurement equipment needed for this procedure is a humidity data logger. Most loggers offered at the FELL can measure temperature and humidity at the same time. Relative humidity and temperature measurements should be taken at the same time if both variables are required. If outside air temperature or system air temperature, the same data loggers can be used to measure humidity. Refer to the [FELL catalog](https://nycenergytools.com/equipment/) to identify temperature/humidity data loggers. The contents of this guide are largely based off the Onset HOBO MX2301 logger, which can be found and borrowed through FELL. 
 
The data loggers should be installed in the ductwork with the air stream. The relative humidity data measured by the logger should be collected as hourly average values and not instantaneous. With this method, the logger will detect humidity fluctuations across the hour and store the average value of those fluctuations, rather than the measured relative humidity value at an instantaneous point in time (which does not account for those changes).

Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements. 
 
## Measurement Steps

### 1. Preparation for data acquisition 

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. 

<ul>
<li>Logging interval: 1-hour</li>
<li>Date and time to start logging</li>
<li>Date and time to stop logging</li> 
<li>Value(s) to measure: Relative Humidity (%), Temperature (F) if necessary</li> 
<li>Sampling interval: 1-second</li>
</ul>

<a href="https://www.youtube.com/watch?v=D178xIAkoUA&list=PL-NERcBsKg4Uo8mxaFa8glUd_X4-bd0R7&index=1">
<figure class="figure">
  <img src="/images/measurement-technique/relative-humidity/Relative Humidity Figure 1 Updated.png" class="figure-img img-fluid rounded" alt="Figure 1: Configuring MX2301 Logger using HOBOconnect">
  <figcaption class="figure-caption text-left">Figure 1: Configuring MX2301 Logger using HOBOconnect</figcaption>
</figure>
</a>

### 2. Installation of equipment 

<ul>
<li>To accurately measure relative humidity of outside air, use a weatherproof data logger only.</li> 
<li>Place the logger inside of the air duct as close as possible to the outside air damper. Alternatively install the logger on the roof or somewhere with little foot traffic and away from direct sunlight.</li>
</ul>

<a href="https://www.youtube.com/watch?v=R9MDkohMD-E&list=PL-NERcBsKg4Uo8mxaFa8glUd_X4-bd0R7&index=2">
<figure class="figure">
  <img src="/images/measurement-technique/relative-humidity/Relative Humidity Figure 2 Updated.png" class="figure-img img-fluid rounded" alt="Figure 2: Data logger installed next to the outside air damper in the ductwork of an AHU. The data logger in use is the Onset HOBO MX2301.">
  <figcaption class="figure-caption text-left">Figure 2: Data logger installed next to the outside air damper in the ductwork of an AHU. The data logger in use is the Onset HOBO MX2301.</figcaption>
</figure>
</a>

<a href="https://www.youtube.com/watch?v=R9MDkohMD-E&list=PL-NERcBsKg4Uo8mxaFa8glUd_X4-bd0R7&index=2">
<figure class="figure">
  <img src="/images/measurement-technique/relative-humidity/Relative Humidity Figure 3 Updated.png" class="figure-img img-fluid rounded" alt="Figure 3: Onset HOBO MX2301 logger installed outdoors with zip ties.">
  <figcaption class="figure-caption text-left">Figure 3: Onset HOBO MX2301 logger installed outdoors with zip ties. </figcaption>
</figure>
</a>

<ul>
<li>To measure relative humidity of the air streams inside of an AHU, place the loggers inside of the ductwork. AHUs typically have panels that open to reach inside of ductwork (Figure 3).</li>  
<li>There are up to four air streams inside an AHU: outside air, return air, mixed air and supply/discharge air (Figure 4). To measure some or all the air streams a different data logger should be used for each air stream.</li> 
<li><i>Mixed air relative humidity is the most difficult data to collect because some mixed air chambers make it difficult to install a data logger to accurately capture mixed air. The measurement uncertainty introduced is unknown and CUNY BPL suggests experimenting with different logger placements within the air chamber. Do not place the loggers near the heating and cooling coils.</i></li> 
<li>Confirm that the logger is recording, and that the sensor is accurately identifying the airstream’s temperature. If the logger has a screen check the temperature value on the logger screen. If the logger does not have a screen, then use the software to connect to the logger and check the temperature it detects.</li> 
<li>Do not move the logger after it has been installed.</li>  
</ul>

<a href="https://www.youtube.com/watch?v=R9MDkohMD-E&list=PL-NERcBsKg4Uo8mxaFa8glUd_X4-bd0R7&index=2">
<figure class="figure">
  <img src="/images/measurement-technique/relative-humidity/Relative Humidity Figure 4 Updated.png" class="figure-img img-fluid rounded" alt="Figure 4: Access panel removed. Data logger is installed on the inside of the access panel. Data logger in use is the Onset HOBO UX-100-001 temperature/RH.">
  <figcaption class="figure-caption text-left">Figure 4: Access panel removed. Data logger is installed on the inside of the access panel. Data logger in use is the Onset HOBO UX-100-001 temperature/RH. </figcaption>
</figure>
</a>

<a href="https://www.youtube.com/watch?v=R9MDkohMD-E&list=PL-NERcBsKg4Uo8mxaFa8glUd_X4-bd0R7&index=2">
<figure class="figure">
  <img src="/images/measurement-technique/relative-humidity/Relative Humidity Figure 5 Updated.png" class="figure-img img-fluid rounded" alt="Figure 5: 3D representation of an AHU with the direction of air streams. One data logger must be used for each air stream, if necessary and one data logger (depending on the model) can measure temperature and humidity at the same time.">
  <figcaption class="figure-caption text-left">Figure 5: 3D representation of an AHU with the direction of air streams. One data logger must be used for each air stream, if necessary and one data logger (depending on the model) can measure temperature and humidity at the same time.</figcaption>
</figure>
</a>

### 3. Verify data is being collected 

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following: 

<ul>
<li><strong>Do not remove the logger.</strong></li> 
<li><i>If you remove the logger, you may need to start over with the setup and installation process.</i></li>  
<li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.</li>  
<li>Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.</li> 
<li>Determine if the measured results align with the expected operation of the system or component.</li> 
</ul>

<a href="https://www.youtube.com/watch?v=EOb9EqQcRXY&list=PL-NERcBsKg4Uo8mxaFa8glUd_X4-bd0R7&index=3">
<figure class="figure">
  <img src="/images/measurement-technique/relative-humidity/Relative Humidity Figure 6 Updated.png" class="figure-img img-fluid rounded" alt="Figure 6: Plot graph of data from the Onset HOBO MX2301 logger. HOBOConnect app is the software used to setup the logger and extract data from the MX2301 logger.">
  <figcaption class="figure-caption text-left">Figure 6: Plot graph of data from the Onset HOBO MX2301 logger. HOBOConnect app is the software used to setup the logger and extract data from the MX2301 logger.</figcaption>
</figure>
</a>

### 4. Retrieve measurement equipment and download all final data 
After verifying the logger is collecting data, do the following: 
<ul>
<li>Allow the logger to collect data for the remainder of the measurement period.</li> 
<li>After the measurement period has concluded, remove the logger.</li>  
<li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the logger via Bluetooth. </li>
<li>Download all data from the logger and save the file in the .csv format for analysis.</li>  
</ul>

<a href="https://www.youtube.com/watch?v=sF_c_7LHR5s&list=PL-NERcBsKg4Uo8mxaFa8glUd_X4-bd0R7&index=4">
<figure class="figure">
  <img src="/images/measurement-technique/relative-humidity/Relative Humidity Figure 7 Updated.png" class="figure-img img-fluid rounded" alt="Figure 7: Final data table. Data was extracted from the logger using HOBOConnect and exported for analysis.">
  <figcaption class="figure-caption text-left">Figure 7: Final data table. Data was extracted from the logger using HOBOConnect and exported for analysis.</figcaption>
</figure>
</a>

## Troubleshooting 

Air handling units come in all sizes and there is no single method on how to properly install the relative humidity loggers. Installing at the mixing plenum/chamber is the most challenging because you are trying to measure the mixed air temperature which is the combination of return air and outside air.

<strong>Problem:</strong> the logger is measuring unexpected values 

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> Verify that the logger is calibrated and re-calibrate the equipment if necessary. Readjust the placement of the logger and ensure that the logger is installed correctly (i.e., there is no interference from heating and cooling coils).   
</div>
