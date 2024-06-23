---
title: Pipe Surface Water Temperature
type: measurement
layout: measurement_technique
measurement_technique_id: 16
excerpt: This technique uses a 4-channel analog logger with a thermocouple sensor to take measurements of water temperature in piping networks at one-hour intervals.
thumbnail_image: "/images/measurement-technique/pipe-surface-water-temperature/2024_0410_pipe surface water temperature MT_thumbnail.jpeg"
related_systems:
related_components: 
url: "/documents/measurement-technique/pipe-surface-water-temperature"
---

## Description of Pipe Surface Water Temperature

This technique uses a 4-channel analog logger with a thermocouple sensor to take long-term measurements of water temperature (oF) at one-hour intervals. This technique can be used to measure the fluid temperature from the surface of a pipe and not directly in the water stream. Data can be used to determine the cooling load and heat rejected to the outdoors by a cooling plant, the heat load delivered by a heating plant and heat recovered by an economizer. For more details on how collected data is used for calculations refer to the calculation methodology of the system being measured. 

Measurements should be taken at one-hour intervals and not instantaneous values. When taking one-hour measurements, the logger will detect the temperature several times every hour and store the average value. Sometimes temperature can fluctuate over a one-hour period, but the instantaneous temperature value will not indicate that change.  
The duration of the long-term measurement should be a minimum of six weeks. Measurements should be when the system of interest is operating under normal conditions. 

### Type of measurement 

Proxy 

## Equipment 
The measurement equipment needed for this procedure is a 4-channel analog logger that is compatible with thermocouple sensors. Thermocouple sensors are specially designed to measure very high temperatures such as the flue stack of a boiler and very low temperatures such as the surface of water pipes for a chiller system. Different thermocouple sensors are used to measure hot or cold pipes. Refer to the [FELL catalog](https://nycenergytools.com/equipment/) to identify the correct loggers and sensors for your project. The contents of this guide are largely based off the Onset HOBO UX120-14M logger and the TC6-T sensor, which can be found and borrowed through FELL. 
 
For sensors installed at a pipe surface the sensor must be secured with thermal tape and the pipe surface should be cleaned prior to installation. Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.  

## Measurement steps 

### 1. Preparation for data acquisition 

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. 

<ul>
<li>Logging interval: 1-hour</li> 
<li>Date and time to start logging</li>
<li>Date and time to stop logging</li> 
<li>Value(s) to measure: Temperature (oF)</li> 
<li>Activate input channels on the logger</li> 
<li>Type of thermocouple sensor (K-type or T-type)</li>
<li>Sampling interval: 1-second</li>
</ul>

<a href="https://www.youtube.com/watch?v=fUjz0qj7GVM&list=PL-NERcBsKg4WejBFb8CkJGuDocttfgSqa">
<figure class="figure">
  <img src="/images/measurement-technique/pipe-surface-water-temperature/Pipe Surface Water Temperature Figure 1 Updated.png" class="figure-img img-fluid rounded" alt="Figure 1: How to configure the 4-channel analog logger & Onset Current Transducer using HOBOware">
  <figcaption class="figure-caption text-left">Figure 1: How to configure the 4-channel analog logger & Onset Current Transducer using HOBOware</figcaption>
</figure>
</a>

### 2. Installation of equipment 

<ul>
<li>Connect the sensors to the data logger.</li>
<li>Place the data logger near the pipes. Avoid adhering the logger to the pipe itself.</li>
<li>Clean the surface of the pipe where the sensor will be placed and remove any dust on the pipe surface.</li> 
<li>Place the sensor on the clean surface and apply thermal tape to fully cover the sensor.</li>
</ul>

<a href="https://www.youtube.com/watch?v=FWgM0-VSlEQ&list=PL-NERcBsKg4WejBFb8CkJGuDocttfgSqa&index=2">
<figure class="figure">
  <img src="/images/measurement-technique/pipe-surface-water-temperature/Pipe Surface Water Temperature Figure 2 Updated.png" class="figure-img img-fluid rounded" alt="Figure 2: Data logger placed on a chiller with two thermocouple sensors connected to it. Data logger in use is the Onset HOBO 4-Channel analog logger (UX120-14M).">
  <figcaption class="figure-caption text-left">Figure 2: Data logger placed on a chiller with two thermocouple sensors connected to it. Data logger in use is the Onset HOBO 4-Channel analog logger (UX120-14M).</figcaption>
</figure>
</a>

<a href="https://www.youtube.com/watch?v=MCP9YBEGtrE&list=PL-NERcBsKg4WejBFb8CkJGuDocttfgSqa&index=3">
<figure class="figure">
  <img src="/images/measurement-technique/pipe-surface-water-temperature/Pipe Surface Water Temperature Figure 3 Updated.png" class="figure-img img-fluid rounded" alt="Figure 3: Thermocouple sensor taped to the pipe surface of a chilled water return line. The sensor in use is the TC6-T.">
  <figcaption class="figure-caption text-left">Figure 3: Thermocouple sensor taped to the pipe surface of a chilled water return line. The sensor in use is the TC6-T.</figcaption>
</figure>
</a>

### 3. Verify data is being collected 

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or phone with the manufacturer’s proprietary software installed to do the following: 

<ul>
<li><strong>Do not remove the logger or sensors. <i>(If you remove the logger, you may need to start over with the setup and installation process.) </i></strong></li>  
<li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.</li>  
<li>Analyze the data with a plot graph. This can be done with proprietary software or Microsoft Excel after exporting the dataset as a .csv file.</li> 
<li>Determine if measured results align with the expected operation of the system or component.</li> 
</ul>

<a href="https://www.youtube.com/watch?v=KyLO5ARQbuA&list=PL-NERcBsKg4WejBFb8CkJGuDocttfgSqa&index=4">
<figure class="figure">
  <img src="/images/measurement-technique/pipe-surface-water-temperature/Pipe Surface Water Temperature Figure 4 Updated.png" class="figure-img img-fluid rounded" alt="Figure 4: Plot graph of data of a chiller system supply and return line. HOBOware Free is the software used to setup the logger and extract data. This logger had two sensors connected to it and results in two separate measurements as shown on the plot graph.">
  <figcaption class="figure-caption text-left">Figure 4: Plot graph of data of a chiller system supply and return line. HOBOware Free is the software used to setup the logger and extract data. This logger had two sensors connected to it and results in two separate measurements as shown on the plot graph.</figcaption>
</figure>
</a>

### 4. Retrieve measurement equipment and download all final data 

After verifying that the logger is collecting data, do the following:

<ul>
<li>Allow the logger to collect data for the remainder of the measurement period.</li> 
<li>After the measurement period has concluded, remove the logger.</li> 
<li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the logger via Bluetooth.</li>  
<li>Use the proprietary software to Stop the logger and end data collection.</li>  
<li>Download all data from the logger and save the file in the.csv file format for analysis.</li> 
</ul>

<a href="https://www.youtube.com/watch?v=47hqmeOh5X4&list=PL-NERcBsKg4WejBFb8CkJGuDocttfgSqa&index=5">
<figure class="figure">
  <img src="/images/measurement-technique/pipe-surface-water-temperature/Pipe Surface Water Temperature Figure 5 Updated.png" class="figure-img img-fluid rounded" alt="Figure 5: Final data table. Data was extracted from the logger using HOBOware free and exported for analysis. This data set contains two columns of temperature data, one for each sensor that was used.">
  <figcaption class="figure-caption text-left">Figure 5: Final data table. Data was extracted from the logger using HOBOware free and exported for analysis. This data set contains two columns of temperature data, one for each sensor that was used.</figcaption>
</figure>
</a>

## Troubleshooting 

<strong>Problem:</strong> the logger is measuring unexpected values 

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> Verify that the logger is calibrated and re-calibrate the equipment if necessary. The surface of the pipe should be cleaned with a damp cloth to wipe off any dirt and grime. The sensor should be covered with thermal tape to prevent measurement of the ambient air around the pipe.
</div>
