---
title: Lighting Fixture Runtime
type: measurement
layout: measurement_technique
measurement_technique_id: 5
excerpt: This technique uses data loggers to measure the duration a lamp or light fixture remains on.
borrow_equipment_url: "https://nycenergytools.com/equipment/light-on-off-data-logger-3/"
thumbnail_image: "/images/measurement-technique/lighting-fixture-runtime/2024_0410_lighting fixture runtime MT_thumbnail.jpeg"
related_systems:
  - Lighting Fixture
url: "/documents/measurement-technique/lighting-fixture-runtime"
---

## Description of Lighting Fixture Runtime

This technique uses data loggers to take long-term measurements of the runtime duration for a lamp or lighting fixture. This technique can be used on lighting systems with any schedule and located in any space type. Accurate measurements can only be taken when data loggers are properly installed. The equipment’s on/off status is detected based on the light level that is generated when the lights are on. 

Measurements should be taken at one-hour intervals​ and will provide insight on the hours of operation of the lamp(s)​. ​Lighting runtime measurements should be paired with t​he wattage and number of fixtures​ ​to calculate total power draw (kW)​ and energy consumption (kWh)​ of the lighting system. For more information about how ​this data is used to estimate the ​annual energy ​consumption, ​please refer to the <a href="/documents/calculation-methodology/lighting-plant-and-systems-energy-consumption">Lighting Plant Calculation Methodology</a>.​ Please note that this approach is recommended as a secondary or supplementary method in the case where ​direct electrical measurements cannot be taken. 

​​In cases where measuring all fixtures associated with a retrofit is not possible, sampling should be used. ​Sampling is the process of measuring a ​subset of ​fixture​s​ that represent the entire population. For example, in an office​ space​ there might be ceiling fixtures, wall mounted fixtures and desk lamps​ and ​​​a light logger ​can ​only ​be used to measure ​a single fixture ​at a time​. Rather than measuring all fixtures in the office, one light logger ​may be used ​per fixture type​. In this example, ​one logger ​may be used ​to measure the runtime of a ceiling fixture, another logger for a wall mounted fixture and ​final ​logger for a desk lamp. The collected runtime data will be used to estimate the annual energy consumption​. Therefore, ​it is important to ​sample​​ ​the fixtures​s​ that operate​ ​under normal conditions so that ​they can ​​​reasonably represent all fixtures of the same type.

If runtime of an entire room or space​ is more important than ​that of a specific ​fixture type, ​a​​ ​single light logger can be calibrated to a light fixture that is used during normal ​space ​operations. The runtime data will be representative of the hours of operation of the space and all fixtures within that space. To calculate the annual energy consumption​, the ​total power draw (kW) of all fixtures in the space must be identified. 

The duration of the long-term measurement should be a minimum of six weeks and data should be collected at one-hour intervals. Measurements should be taken when the fixtures are operating under normal conditions.

### Type of Measurement

<strong>Proxy</strong>

### Equipment

The measurement equipment needed for this procedure is a lighting on/off data logger. Some data loggers may have an additional occupancy sensor that detects the motion of people, but this is not necessary for this measurement technique. Refer to the [FELL catalog](https://nycenergytools.com/equipment/?_search_equipment=light) to identify data loggers to measure lighting runtime. The contents of this guide are largely based off of the [Onset HOBO UX90-002 Light on/off logger](https://nycenergytools.com/equipment/light-on-off-data-logger-3/) which can be found and borrowed through FELL. 

When a lighting system turns on, it emits photons. The lighting on/off sensor operates by using a photosensor to detect the light level and recording the length of time for which the light is detected. The runtime period is considered complete once the light turns off, the light level decreases, and the sensor no longer detects the emitted photons. The logger will record the amount of time that the light was detected (i.e., the lights were on) and document this in its internal storage for each hour interval. Loggers require calibration prior to each use. To do this, the lights should be on, and the logger should be placed in a location that is unshaded but also not too close to other light sources (such as sunlight or other fixtures), because the logger may detect those and collect unwanted data. 

Please ​note ​​that loggers ​will​​​ ​require setup with a computer or phone ​using ​​the manufacturer’s proprietary software prior to installation and measurement logging​ and that older loggers will require the use of a cable to connect to a computer​.​ Refer to the measurement equipment’s user manual for a detailed description of setup requirements. 

## Measurement Steps

### 1. Preparation for Data Acquisition

Use the manufacturer’s software to ​set up ​​and launch ​the logger​(s)​. Refer to the ​equipment’s ​user manual for detailed instructions on how to ​set up​ the logger. 

<ul>
<li>Logging interval: 1-hour </li>
<li>Date and time to start logging</li>
<li>Date and time to stop logging</li>
<li>Value to measure: ​R​untime (minutes)</li>
</ul>

<a href="https://www.youtube.com/watch?v=zcR39ATSAbM&list=PL-NERcBsKg4VRiNsxpXVgfI9RaTywiMVC&index=1">
<figure class="figure">
  <img src="/images/measurement-technique/lighting-fixture-runtime/Lighting Fixture Runtime Figure 1 Updated.png" class="figure-img img-fluid rounded" alt="Figure 1. Light On/Off Logger Configuration.">
  <figcaption class="figure-caption text-left">Figure 1. Light On/Off Logger Configuration.</figcaption>
</figure>
</a>

### 2. Installation of Equipment

<ul>
​​​<li>Confirm that the fixture is operational and turn the light fixture on.​​</li> 
<li>Place the data logger near the light fixture​ in a non-hazardous location.​</li> 
<li>​​​While the light is on, c​alibrate the data logger to the fixture (refer to the ​data logger’s ​user manual for instructions​ and requirements for calibration​)​.​​</li>
<li>​​​Visually confirm that the logger is recording, and that the sensor is accurately identifying whether or not the lights are on.</li> 
</ul> 

<a href="https://www.youtube.com/watch?v=0OJvUP_NdYM&list=PL-NERcBsKg4VRiNsxpXVgfI9RaTywiMVC&index=2">
<figure class="figure">
  <img src="/images/measurement-technique/lighting-fixture-runtime/Lighting Fixture Runtime Figure 2 Updated.png" class="figure-img img-fluid rounded" alt="Figure 2. Onset HOBO UX90-002x​ ​installed near a light fixture and measuring runtime.">
  <figcaption class="figure-caption text-left">Figure 2. Onset HOBO UX90-002x​ ​installed near a light fixture and measuring runtime.</figcaption>
</figure>
</a>

### 3. Verify Data is Being Collected

Wait ​24-48 hours to verify data collection. Return to the location of the measured equipment ​​and use ​​a laptop or phone with the manufacturer’s ​proprietary​ software installed to do the following:

<div class="alert alert-warning" role="alert">
<strong>Do not remove the logger or sensors.</strong> If you remove the logger, you may need to start over with the setup and installation process.
</div>

<ul> 
<li>​​​​If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.</li>
<li>​​​Analyze the data with a ​​plot graph​. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.</li>
<li>Determine if ​the ​measured results align with ​the ​expected operation of the fixtures or space​ based on observed operational patterns or known equipment schedules.</li> ​ 
</ul>

<a href="https://www.youtube.com/watch?v=JkNpQ81sdcQ&list=PL-NERcBsKg4VRiNsxpXVgfI9RaTywiMVC&index=3 ">
<figure class="figure">
  <img src="/images/measurement-technique/lighting-fixture-runtime/Lighting Fixture Runtime Figure 3 Updated.png" class="figure-img img-fluid rounded" alt="Figure 3. ​P​lot graph of ​lighting runtime ​data from the Onset HOBO UX90-002m data logger.​ Software used is HOBOware Free.">
  <figcaption class="figure-caption text-left">Figure 3. ​P​lot graph of ​lighting runtime ​data from the Onset HOBO UX90-002m data logger.​ Software used is HOBOware Free.</figcaption>
</figure>
</a>

### 4. Retrieve Measurement Equipment and Download All Final Data

After verifying ​that ​the logger is collecting data​,​ do the following: 
<ul>
<li>Allow the logger to collect data for the remainder of the measurement period​.​​</li>
<li>​​After the measurement period ​has concluded, ​remove the logger​.</li>
<li>​​​If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.</li>
<li>Download all data from the logger and ​save the file in the​​ .​csv format for analysis​.​</li> 
</ul>

<a href="https://www.youtube.com/watch?v=BP5RZugx20o&list=PL-NERcBsKg4VRiNsxpXVgfI9RaTywiMVC&index=4">
<figure class="figure">
  <img src="/images/measurement-technique/lighting-fixture-runtime/Lighting Fixture Runtime Figure 4 Updated.png" class="figure-img img-fluid rounded" alt="Figure 4. Final data​ table ​in .csv format. Data was extracted from the logger using HOBOware Free and exported ​for analysis.">
  <figcaption class="figure-caption text-left">Figure 4. Final data​ table ​in .csv format. Data was extracted from the logger using HOBOware Free and exported ​for analysis.</figcaption>
</figure>
</a>

## Troubleshooting 

<strong>Problem 1:</strong> Light logger continues to detect light despite the fixture being turned off 

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> The light logger may be detecting another light source such as the sun or another fixture. Calibrate the logger again with the same fixture. If the problem persists, try calibrating with a different fixture. If the problem continues, then reach out to our equipment specialist for a replacement logger.
</div>

<strong>Problem 2:</strong> The logger screen is blank 

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> The logger might have an energy saving feature that conserves battery life by turning off the screen. Try pressing one of the logger buttons or connecting to it with your phone or laptop.​ If the screen remains blank then try replacing the battery otherwise reach out to our equipment specialist for a replacement.
</div>
