---
title: Lighting Fixture Runtime
type: measurement
layout: measurement_technique
measurement_technique_id: 5
excerpt: Use this technique to measure the hours of operation of a light fixture or lamp with a data logger.
borrow_equipment_url: "https://nycenergytools.com/equipment/light-on-off-data-logger-3/"
thumbnail_image: "/images/measurement-technique/lighting-fixture-runtime/2024_0410_lighting fixture runtime MT_thumbnail.jpeg"
related_systems:
  - Lighting Fixture
related_calculations:
  - Lighting Plant and Systems Energy Consumption
associated_calculations:
  - Lighting Plant and Systems Energy Consumption
url: "/documents/measurement-technique/lighting-fixture-runtime"
---

## Understanding Lighting Fixture Runtime Measurements

This technique uses data loggers to take long-term measurements of the runtime duration for a lamp or lighting fixture. This technique can be used on lighting systems with any schedule and located in any space type. Accurate measurements can only be taken when data loggers are properly installed. The equipment’s on/off status is detected based on the light level that is generated when the lights are on. 

Measurements should be taken at one-hour intervals,​ and will provide insight on the hours of operation of the lamp(s)​. ​Lighting runtime measurements should be paired with t​he wattage and number of fixtures​ ​to calculate total power draw (kW)​ and energy consumption (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)​ of the lighting system. For more information about how ​this data is used to estimate the ​annual energy ​consumption, ​please refer to the <a href="/documents/calculation-methodology/lighting-plant-and-systems-energy-consumption">Lighting Plant Calculation Methodology</a>.​ Please note that this approach is recommended as a secondary or supplementary method in the case where ​direct electrical measurements cannot be taken. 

​​In cases where measuring all fixtures associated with a retrofit is not possible, sampling should be used. ​Sampling is the process of measuring a ​subset of ​fixture​s​ that represent the entire population. For example, in an office​ space​ there might be ceiling fixtures, wall mounted fixtures, and desk lamps​, but ​​​a light logger ​can ​only ​be used to measure ​a single fixture ​at a time​. Rather than measuring all fixtures in the office, one light logger ​may be used ​per fixture type​. In this example, ​one logger ​may be used ​to measure the runtime of a ceiling fixture, another logger for a wall mounted fixture, and ​final ​logger for a desk lamp. The collected runtime data will be used to estimate the annual energy consumption​. Therefore, ​it is important to ​sample​​ ​the fixtures​s​ that operate​ ​under normal conditions so that ​they can ​​​reasonably represent all fixtures of the same type.

If runtime of an entire room or space​ is more important than ​that of a specific ​fixture type, ​a​​ ​single light logger can be calibrated to a light fixture that is used during normal ​space ​operations. The runtime data will be representative of the hours of operation of the space and all fixtures within that space. To calculate the annual energy consumption​, the ​total power draw (kW) of all fixtures in the space must be identified. 

The duration of the long-term measurement should be a minimum of six weeks, and data should be collected at one-hour intervals. Measurements should be taken when the fixtures are operating under normal conditions.

### Type of Measurement

<strong>Proxy</strong>

### Measurement Equipment to Use

The measurement equipment needed for this procedure is a lighting on/off data logger. Some data loggers may have an additional occupancy sensor that detects the motion of people, but this is not necessary for this measurement technique. Refer to the [FELL catalog](https://nycenergytools.com/equipment/?_search_equipment=light) to identify data loggers to measure lighting runtime. The contents of this guide are largely based off of the [Onset HOBO UX90-002 Light on/off logger](https://nycenergytools.com/equipment/light-on-off-data-logger-3/) which can be found and borrowed through FELL. 

When a lighting system turns on, it emits photons. The lighting on/off sensor operates by using a photosensor to detect the light level and records the length of time for which the light is detected. The runtime period is considered complete once the light turns off, the light level decreases, and the sensor no longer detects the emitted photons. The logger records the amount of time that the light was detected (i.e., the lights were on) and documents this in its internal storage for each hour interval. Loggers require calibration prior to each use. To do this, the lights should be on, and the logger should be placed in a location that is unshaded, but also not too close to other light sources (such as sunlight or other fixtures), because the logger may detect those and collect unwanted data. 

Please ​note ​​that loggers ​require setup with a computer or phone ​using ​​the manufacturer’s proprietary software prior to installation and measurement logging​ and that older loggers will require the use of a cable to connect to a computer​.​ Refer to the measurement equipment’s user manual for a detailed description of setup requirements.

## Measurement Steps

### 1. Prepare for Data Acquisition

Use the manufacturer’s software to ​set up ​​and launch ​the logger​(s)​. Refer to the ​equipment’s ​user manual for detailed instructions on how to ​set up​ the logger. 

- Logging interval: 1-hour 
- Date and time to start logging<
- Date and time to stop logging
- Value to measure: ​R​untime (minutes)

<iframe class ="video" src="https://www.youtube.com/embed/zcR39ATSAbM?si=kxsyJA0jMpb7AKMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 1. How to configure the light on/off data logger on HOBOware.</figcaption>


### 2. Install Equipment

1. Confirm that the fixture is operational and turn the light fixture on.​
2. Place the data logger near the light fixture​ in a non-hazardous location.
3. ​While the light is on, c​alibrate the data logger to the fixture (refer to the ​data logger’s ​user manual for instructions​ and requirements for calibration​)​.​
4. ​​​Visually confirm that the logger is recording, and that the sensor is accurately identifying whether or not the lights are on.

<iframe class ="video" src="https://www.youtube.com/embed/0OJvUP_NdYM?si=39x6ZQwBbhWzBRpN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 2. How to calibrate and install the light on/off logger.</figcaption>

### 3. Verify Data is Being Collected

Wait ​24-48 hours to verify data collection. Return to the location of the measured equipment ​​and use ​​a laptop or phone with the manufacturer’s ​proprietary​ software installed to do the following:

<div class="alert alert-warning" role="alert">
<strong>Do not remove the logger or sensors.</strong> If you remove the logger, you may need to start over with the setup and installation process.
</div>

1. ​​​​If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
2. ​​​Analyze the data with a ​​plot graph​. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.
3. Determine whether ​the ​measured results align with ​the ​expected operation of the fixtures or space​ based on observed operational patterns or known equipment schedules.

<iframe class ="video" src="https://www.youtube.com/embed/JkNpQ81sdcQ?si=Zv30_vcXT5tCskjh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 3. How to check data of runtime loggers using HOBOware.</figcaption>


### 4. Retrieve Measurement Equipment and Download All Final Data

After verifying ​that ​the logger is collecting data​,​ do the following: 

1. Allow the logger to collect data for the remainder of the measurement period​.​​
2. ​​After the measurement period ​has concluded, ​remove the logger​.
3. If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
4. Download all data from the logger and ​save the file in the​​ .​csv format for analysis​.

<iframe class ="video" src="https://www.youtube.com/embed/BP5RZugx20o?si=BwMHgGtxP943uhMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 4. How to extract data from the logger and convert to .csv file on HOBOware.</figcaption>

## Troubleshooting Our Measurement Equipment

<strong>Problem 1:</strong> Light logger continues to detect light despite the fixture being turned off 

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> The light logger may be detecting another light source, such as the sun or another fixture. Calibrate the logger again with the same fixture. If the problem persists, try calibrating with a different fixture. If the problem continues, reach out to our equipment specialist for a replacement logger.
</div>

<strong>Problem 2:</strong> The logger screen is blank 

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> The logger might have an energy saving feature that conserves battery life by turning off the screen. Try pressing one of the logger buttons or connecting to it with your phone or laptop.​ If the screen remains blank, try replacing the battery. If it remains blank, reach out to our equipment specialist for a replacement.
</div>