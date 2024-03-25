---
title: System Air Temperature
type: measurement
layout: measurement_technique
measurement_technique_id: 7
excerpt: This technique uses data loggers to take long-term measurements of air temperature (oF) at one-hour intervals.
related_systems:
related_components:
url: "/documents/measurement-technique/system-air-temperature"
---

## Description of System Air Temperature

This technique uses data loggers to take long-term measurements of air temperature (F) at one-hour intervals. This technique can be used to characterize air handling unit (AHU) performance; supply/discharge air, return air, exhaust air and mixed air temperatures are measured with this technique. Each air stream requires a different logger for data collection. This data is used to estimate the thermal loads of the system during the heating and cooling seasons. For a more detailed description of how to characterize an AHU, please refer to the protocols and procedures: PnP-P-02 – Air Handling Plant. 

Measurements should be taken at one-hour average intervals. When taking one-hour measurements, the logger will detect the temperature several times over every hour and store the average value. Sometimes temperature can fluctuate over a one-hour period, but the instantaneous temperature value will not indicate that change.  

The duration of the long-term measurement should be a minimum of six weeks. Measurements should be taken when the system is operating under normal conditions. Although AHUs typically operate year-round, the heating and cooling season will affect their schedules. To calculate the annual energy consumption of a unit, six weeks of measurements should be taken for each season. To calculate only the heating or cooling season energy consumption, six weeks of measurements for that season should be taken. 

### Type of Measurement 

Direct 

## Equipment 

The measurement equipment needed for this procedure is a temperature logger (or a combined temperature and humidity data logger). Refer to the [FELL catalog](https://nycenergytools.com/equipment/) to identify temperature/humidity data loggers. The contents of this guide are largely based off the Onset HOBO MX1101 logger, which can be found and borrowed through FELL. 
 
The data loggers should be installed in the ductwork with the air stream. Users should avoid placing the loggers near heat exchangers, such as the heating or cooling coils within the air handling unit, because the logger will detect the temperature of air around those components instead of the true air temperature. The temperature data measured by the logger should be collected as hourly average values and not instantaneous. With this method, the logger will detect temperature fluctuations across the hour and store the average value of those fluctuations rather than the measured temperature value at an instantaneous point in time (which does not account for those changes).  
Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.  

## Measurement steps

### Preparation for data acquisition 

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. 

<ul>
<li>Logging interval: 1-hour</li>
<li>Date and time to start logging</li>
<li>Date and time to stop logging</li>
<li>Value(s) to measure: Temperature (OF), Relative Humidity (%) if necessary</li> 
<li>Sampling interval: 1-second</li>
</ul>

<a href="https://www.youtube.com/watch?v=sbUBDB2eg_U&list=PL-NERcBsKg4Vy0UmvmBucYBBNSjQspKqB&index=1">
<figure class="figure">
  <img src="/images/measurement-technique/system-air-temperature/system air temperature figure 1.png" class="figure-img img-fluid rounded" alt="Figure 1: Configuring the Temp/RH Logger using HOBOconnect">
  <figcaption class="figure-caption text-left">Figure 1: Configuring the Temp/RH Logger using HOBOconnect</figcaption>
</figure>
</a>

### Installation of equipment 

<ul>
<li>To measure temperature of the air streams inside of an AHU, place the loggers inside of the ductwork. <strong>(Mixed air temperature is the most difficult data to collect because some mixed air chambers make it difficult to install a data logger to accurately capture mixed air. The measurement uncertainty introduced is unknown and CUNY BPL suggests experimenting with different logger placements within the air chamber. Do not place the loggers near the heating and cooling coils.)</strong></li>
<li>Confirm that the logger is recording, and that the sensor is accurately identifying the airstream’s temperature. If the logger has a screen check the temperature value on the logger screen. If the logger does not have a screen, then use the software to connect to the logger and check the temperature it detects.</li>
<li>Do not move the logger after it has been installed.</li>
</ul>

<a href="https://www.youtube.com/watch?v=R9MDkohMD-E&list=PL-NERcBsKg4Vy0UmvmBucYBBNSjQspKqB&index=2">
<figure class="figure">
  <img src="/images/measurement-technique/system-air-temperature/system air temperature figure 2.png" class="figure-img img-fluid rounded" alt="Figure 2: Data logger installed inside of the ductwork of an AHU. The data logger in use is the Onset HOBO MX1101.">
  <figcaption class="figure-caption text-left">Figure 2: Data logger installed inside of the ductwork of an AHU. The data logger in use is the Onset HOBO MX1101.</figcaption>
</figure>
</a>

<a href="https://www.youtube.com/watch?v=R9MDkohMD-E&list=PL-NERcBsKg4Vy0UmvmBucYBBNSjQspKqB&index=2">
<figure class="figure">
  <img src="/images/measurement-technique/system-air-temperature/system air temperature figure 3.png" class="figure-img img-fluid rounded" alt="Figure 3: Onset HOBO MX1101 data installed on the access panel of the ductwork. After complete installation, the panel will be closed and the logger will remain inside the ductwork.">
  <figcaption class="figure-caption text-left">Figure 3: Onset HOBO MX1101 data installed on the access panel of the ductwork. After complete installation, the panel will be closed and the logger will remain inside the ductwork.</figcaption>
</figure>
</a>

### Verify data is being collected

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following: 

<ul>
<li><strong>Do not remove the logger. (If you remove the logger, you may need to start over with the setup and installation process.)</li></strong>
<li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.</li>
<li>Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.</li> 
<li>Determine if the measured results align with the expected operation of the system or component based on observed equipment schedules.</li>
</ul> 

<a href="https://www.youtube.com/watch?v=EOb9EqQcRXY&list=PL-NERcBsKg4Vy0UmvmBucYBBNSjQspKqB&index=3">
<figure class="figure">
  <img src="/images/measurement-technique/system-air-temperature/system air temperature figure 4.png" class="figure-img img-fluid rounded" alt="Figure 4: Plot graph of temperature data from the Onset HOBO UX90-002m data logger. Software used is HOBOware Free.">
  <figcaption class="figure-caption text-left">Figure 4: Plot graph of temperature data from the Onset HOBO UX90-002m data logger. Software used is HOBOware Free. </figcaption>
</figure>
</a>

### Retrieve measurement equipment and download all final data 

After verifying that the logger is collecting data, do the following:

<ul>
<li>Allow the logger to collect data for the remainder of the measurement period.</li> 
<li>After the measurement period has concluded, remove the logger.</li>  
<li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the logger via Bluetooth.</li>  
<li>Use the proprietary software to Stop the logger and end data collection.</li>  
<li>Download all data from the logger and save the file in the.csv file format for analysis.</li>
</ul>

<a href="https://www.youtube.com/watch?v=-vxr8pnguIQ&list=PL-NERcBsKg4Vy0UmvmBucYBBNSjQspKqB&index=4">
<figure class="figure">
  <img src="/images/measurement-technique/system-air-temperature/system air temperature figure 5.png" class="figure-img img-fluid rounded" alt="Figure 5: Final data table. Data was extracted from the logger using HOBOConnect and exported for analysis.">
  <figcaption class="figure-caption text-left">Figure 5: Final data table. Data was extracted from the logger using HOBOConnect and exported for analysis.</figcaption>
</figure>
</a>

## Troubleshooting 

Air handling units come in all sizes and there is no single method on how to properly install the temperature loggers. Installing at the mixing plenum/chamber is the most challenging because you are trying to measure the mixed air temperature which is the combination of return air and outside air. 

<strong>Problem 1:</strong> the logger is measuring unexpected values. 

<div class="alert alert-warning" role="alert">
<strong>Solution</strong> Verify that the logger is calibrated and re-calibrate the equipment if necessary.  
</div>

<strong>Problem 2:</strong> The temperature reading is higher than expected 

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> Readjust the placement of the logger and ensure that the logger is installed correctly (i.e., there is no interference from heating and cooling coils).
</div>
