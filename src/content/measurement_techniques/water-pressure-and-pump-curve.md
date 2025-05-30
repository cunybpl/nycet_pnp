---
title: Water Pressure and Pump Curve
type: measurement
layout: measurement_technique
measurement_technique_id: 12
excerpt: Use this technique to measure the pressure differential across pumps at one-hour intervals with data loggers. Data can be used to infer the water flow rate of pumps.
borrow_equipment_url: "https://nycenergytools.com/equipment/gauge-pressure-sensor/"
thumbnail_image: "/images/measurement-technique/water-pressure-and-pump-curve/2024_0410_water pressure and pump curve MT_thumbnail.jpeg"
related_systems:
  - Air Cooled Chiller
  - Water-cooled Chiller
  - Waterside Economizer
associated_components:
  - Liquid-to-liquid Heat Exchanger
related_calculations:
  - Liquid-to-liquid Heat Exchanger Heat Transfer
url: "/documents/measurement-technique/water-pressure-and-pump-curve"
---

## Understanding Water Pressure and Pump Curve Measurements

This technique uses water pressure measurements to infer the water flow rate (in GPM) for a pump. This is called the pump curve method because it uses the pump curve, pressure data, and technical specifications of a pump to determine the water flow rate, as illustrated in Figure 1. A water loop system can have multiple pumps, and the water flow rate for each pump must first be determined and then summed to obtain the total flow rate of the water loop. Measurement data is used to calculate how much heat is added or removed by the heating or cooling plant. Data is also used to calculate energy/heat recovered with a liquid-to-liquid heat recovery system. 

{{< admonition type="note" >}}
Water pressure measurements are taken at the inlet (suction) and outlet (discharge) sides of a pump. To measure water pressure, use a programmable data logger with pressure transducers installed on the access ports of the piping network. This is preferred over a pressure gauge reading because the pressure gauge introduces greater measurement error. 
{{< /admonition >}}

This technique **should be used only if** [direct measurement of water flow rate](/documents/measurement-technique/water-flow-rate) with a flow meter is not possible. To properly use this technique, you need the pump impeller size, model number, and pump curve, as well as the information on the pump motor nameplate, such as the horsepower and efficiency (for each pump in the water loop)--in addition to the pressure measurements. Without this information, this technique cannot be executed. Depending on how the piping network is designed in the facility, a combination of a direct measurement of water flow rate and this measurement technique can be used. 

Measurements should be taken at **one-hour intervals**; do not use instantaneous values. For water loop systems that operate year-round and are driven by outside air temperature (OAT), **one full year of measurement** (12 consecutive months, 52 consecutive weeks, or 365 consecutive days) is required for the baseline and **one full year for the reporting period**. For water loop systems that operate during a particular season, the full season must be measured for the baseline and reporting periods. For water loop systems that are not driven by OAT, it is recommended to measure flow rate for a minimum of six weeks. Measurements should be taken when the system or component is operating under normal conditions.

Figure 1 illustrates a typical pump curve with the flow rate (in GPM) marked on the horizontal axis and total head (in meters) marked on the vertical axis. Flow rate was determined by applying the pump impeller size and the total feet of head to the pump curve.

<figure class="figure">
  <img src="/images/measurement-technique/water-pressure-and-pump-curve/water pressure and pump curve figure 1.png" class="figure-img img-fluid rounded" alt="Figure 1. A typical pump curve marked with the determined flow rate on the bottom axis.">
  <figcaption class="figure-caption text-left">Figure 1. A typical pump curve marked with the determined flow rate on the bottom axis.</figcaption>
</figure>

### Type of Measurement 

This is a <strong>proxy measurement</strong> of the water flow rate. 

Total head is calculated by taking the difference between discharge and suction pressure and multiplying it by a constant. Design FT, design GPM, pump RPM, and pump horsepower are all obtained from the nameplate on the pump or from the technical specifications for that pump model.

<p class="equation equation-center">\begin{equation*} \Delta P = Discharge \hspace{2mm} Pressure - Suction \hspace{2mm} Pressure\end{equation*}</p>
<p class="equation equation-center">\begin{equation*} Total \hspace{2mm} Head = \Delta P * 2.31 Pressure\end{equation*}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\Delta P =$ differential pressure across the pump, psi</p>
<p class="equation">$Discharge \hspace{2mm} Pressure =$ water pressure leaving the pump, psi</p>
<p class="equation">$Suction \hspace{2mm} Pressure =$ water pressure entering the pump, psi</p>
<p class="equation">$Total \hspace{2mm} Head =$ operating pressure of the pump converted from psi, feet</p>
<p class="equation">$2.31 =$ constant equivalent to one pound of pressure per in $^2$ of water (at 60 degrees F), feet/psi</p>

## Measurement Equipment 

The measurement equipment needed for this procedure is a data logger with pressure transducers and makes use of the following equipment available in the [Field Equipment Lending Library](https://nycenergytools.com/equipment/) depending on the length of time required for the measurement:

<div class="equip-grid">

{{< equipment_link borrow="yes" type="equip" url="https://nycenergytools.com/equipment/4-channel-analog-data-logger/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/05/4-channel-logger-1-300x300.jpg" title="4-Channel Analog Data Logger" excerpt="An analog logger that supports up to four external sensors allowing you to measure temperature, current, voltage, air flow, pressure and more in one single logger." >}}

{{< equipment_link borrow="yes" type="equip" url="https://nycenergytools.com/equipment/gauge-pressure-sensor/" imgUrl="https://nycenergytools.com/wp-content/uploads/2021/04/Ashcroft-Gauge-Pressure-Sensor_T-ASH-G2-500-300x257.jpg" title="Gauge Pressure Sensor" excerpt="Standalone data logger that monitors a motor’s on and off conditions using an internal AC magnetic field sensor." >}}

</div>

{{< admonition type="note" >}}
The Ashcroft Pressure Transducer measures voltage between 0V and 5V. The pressure transducer connects to the UX120-006M data logger which then converts the voltage signal to pressure in PSI units. Please refer to [our video instructions](#1-prepare-for-data-acquisition) for details on how to configure the UX120-006M to detect voltage and convert to pressure.

We recommend using this equipment, rather than the on-site pressure gauge, to determine the pump flow to reduce measurement error. One pressure transducer should be used for each side of the pump. Heating and cooling plants can have different pump configurations, such as primary-only and primary-secondary pumps. Additionally, pumps can operate at constant speed or variable speed.
{{< /admonition >}}

{{< admonition type="warning" >}}
It is important to identify the pump configuration and number of pumps for the plant so enough data loggers and transducers are borrowed from the FELL.
{{< /admonition >}}

{{< admonition type="note" >}}
Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.
{{< /admonition >}}

## Measurement Procedure

### 1. Prepare for Data Acquisition

Identify the temperature (hot or cold) of the pipes that will be measured. Use the manufacturer’s software to set up the logger. Refer to the user manual for detailed instructions on how to set up the logger. 

- Logging interval: 1-hour 
- Date and time to start logging 
- Date and time to stop logging
- Values to measure: voltage (V) or pressure (psi)[^1]
- Activate input channels on the logger
- Type of sensor
- Sampling interval: 1-second

<iframe class ="video" src="https://www.youtube.com/embed/9SxjYiv0sWw?si=2jBBtLWF0arDAoKI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 1. How to setup 4-channel analog logger with CT to measure water pressure and pump curve (7 min).</figcaption>


### 2. Install at the Site 

1. Confirm that the equipment is operational.
2. Locate the pressure gauges that are installed on the suction and discharge sides of the pump.
3. Connect the transducers to the data logger.
4. Place the data logger near the pipes, avoiding placing the logger on the pipe itself.
5. Confirm that the pressure gauge has a stop-valve to prevent water from flowing.
6. If there is no stop valve on the piping system, consider using another technique to quantify the water flow. 
7. Remove the stop-valve and replace it with a T-shaped valve to stop the flow of water.
8. Connect the transducer to the T-shaped valve.
9. To avoid leaks, wrap Teflon tape around the installed equipment.

<!-- Needs figure -->
<!-- Figure 3 illustrates a pressure gauge installed on an access port to the return chilled water line of a water-cooled chilled water plant. Notice the stop valve handle to the bottom right of the pressure gauge. This is used to stop the flow of water.  -->

<!-- Will Update the below video once correct video is found -->
<!-- <iframe class ="video" src="https://www.youtube.com/embed/FWgM0-VSlEQ?si=NtSU7hFdv8PJe6fy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Figure 3. How to install the 4-channel analog logger with CT  onsite.</figcaption> -->

### 3. Verify Data is Being Collected 

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or a phone with manufacturer’s propriety software installed to do the following:

{{< admonition type="warning">}}
**Do not remove the logger or sensors.** If you remove the logger, you may need to start over with the setup and installation process.
{{< /admonition >}}

1. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.
2. Analyze the data with a plot graph. This can be done with proprietary software or Microsoft Excel after exporting the dataset as a .csv file.
3. Determine whether the results align with the expected operation of the system or component based on observed operational patterns or known equipment schedules.

<iframe class ="video" src="https://www.youtube.com/embed/KyLO5ARQbuA?si=O0PNhabxgfewirdz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 2. How to check the data of loggers using HOBOware (10 min).</figcaption>

### 4. Retrieve Measurement Equipment and Download All Final Data

After verifying the logger is collecting data, do the following: 

1. Allow the logger to collect data for the remainder of the measurement period.
2. After the measurement period has concluded, remove the transducers and data logger.
3. If necessary, connect the logger to a laptop or phone via USB cable. Otherwise, use the software to Stop the logger and end data collection.
4. Download all data from the logger and save the file in the .csv file format for analysis.

<iframe class ="video" src="https://www.youtube.com/embed/ROULsEti34A?si=zgEIBByCNf8U5oFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption class="figure-caption text-left">Video 3. How to extract the data from the logger using HOBOware (4 min).</figcaption>

### 5. Process and Analyze Measured Data

Use the collected measurement data in the corresponding calculator file based on the type of component you are measuring:

#### Heat Exchanger

{{< page_hyperlink page_title="Liquid-to-liquid Heat Exchanger" url="/documents/components/liquid-to-liquid-heat-exchanger/#how-to-quantify" >}}

## Troubleshooting

This section provides some troubleshooting tips for the most common issues with equipment installation.

{{< details summary="Unexpected readings" >}}
Verify that the logger is calibrated. Re-calibrate the equipment if necessary.
{{< /details >}}

## Footnotes

[^1]: This is dependent on the measurement capability of the chosen logger.