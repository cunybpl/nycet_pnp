---
title: Electrical Energy
type: measurement
layout: measurement_technique
measurement_technique_id: 1
excerpt: This technique uses a data logger to take long- term measurements of the electrical energy (kWh) and power draw (kW) of a system or component at one- hour intervals.
related_systems:
  - Water Cooled Chiller
  - Condenser Water Loop
  - Chilled Water Loop
  - Hot Water Loop
  - Steam Distribution
  - Steam Condensate Recovery
  - Electrical Distribution
  - Variable-Speed, Variable-Volume Air Handling Unit
related_components:
  - Variable-Speed, Variable-Volume Pump and Motor
  - Variable-Speed, Variable-Volume Fan and Motor
  - Variable-Speed, Variable-Volume Compressor and Motor
related_calculation_methodologies:
  - Cooling Tower Fans Energy Consumption
associated_measurement_techniques:
  - Motor Runtime
  - Water Flow Rate
borrow_equipment_url: "https://nycenergytools.com/equipment/motor-on-off-logger-ux90-004/"
url: "/documents/measurement-technique/electrical-energy"
---

## Description
This technique uses a data logger to take long- term measurements of the electrical energy (kWh) and power draw (kW) of a system or component at one- hour intervals. Measurements are taken at the electrical distribution system (more specifically at a panelboard , power panel or switchgear) that serves the system or component. Measurement data is used to estimate the annual energy consumption of the system or component. 

Data loggers and power meters use instantaneous measurements of current and voltage to calculate the instantaneous power draw. Over time, the logger or meter calculates the average power draw. Manufacturers of measurement equipment use different calculations for power draw. In order to compare data obtained from different measurement equipment it is important to understand the calculation used by the equipment. The manufacturer’s user manual or technical specifications discuss these features in detail. 

The duration of the long-term measurement and when to measure is dependent on the system and the operation of the building. The best practice is a minimum of six weeks and data should be collected at one-hour intervals; longer measurement periods are encouraged for deeper analysis of the equipment. Measurements should be taken when the system or component is operating under normal conditions. 

### Type of Measurement
Direct and Proxy 

<strong>Electrical energy measurements are direct measurements of energy</strong>, and the obtained data can be used to calculate the annual energy consumption of the system or component.

This methodology can also be used as a <strong>proxy measurement</strong> of operational hours of the system or component. Daily or weekly models can be developed to better characterize the equipment. 

### Equipment

The measurement equipment needed for this procedure is an energy data logger that has the capacity to measure AC voltage and current. Refer to the [FELL catalog] (https://nycenergytools.com/equipment/?_measurement_type=energy&_equipment_type=logger/) to identify data loggers that measure power and energy draw by an electricity-powered system. The contents of this guide are largely based off of the [Dent EliteProXC] (https://nycenergytools.com/equipment/energy-logger-2/) power data logger, which can be found and borrowed through FELL. 

The sensors used to measure AC current are known as current transformers. This is because they operate like the transformers used by utility companies to step-up and step-down voltage. Alternating current in the conductor (the wire that is being measured) induces a voltage on the current transformer which then produces a current signal that the data logger detects and records. However, unlike utility transformers, the measurement equipment only transforms a tiny portion of the current flowing through the wire that is being measured. AC voltage is measured with voltage leads (usually alligator clips). 

Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.

## Measurement Steps

### 1. Preparation for Data Acquisition

The following sections assume a data logger is being used, for details on measurement with a power meter refer to the <strong>One-time true RMS power</strong> guide. 

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. 

<ul>
  <li>Logging interval: 1-hour</li>
  <li>Date and time to start logging</li>
  <li>Date and time to stop logging</li>
  <li>Values to measure: Power (kW), Energy (kWh)</li>
</ul>

An example of how to setup the Dent EliteProXC power data logger is shown in the video below.

<a href="https://www.youtube.com/embed/HS9k_L59IX8?si=v4kqZXDcbGSTxhHc">
<figure class="figure mb-3 mt-3">
  <img src="/images/measurement-technique/electrical_energy/electrical_energy_figure1.png" class="figure-img img-fluid rounded" alt="Figure 2. Single phase, two-wire. Image courtesy of ELOG19 software configuration diagram">
  <figcaption class="figure-caption text-left">Figure 2. Single phase, two-wire. Image courtesy of ELOG19 software configuration diagram</figcaption>
</figure>
</a>

### 2. Installation of Equipment

<ul>
  <li>Confirm that the equipment is operational.</li>
  <li>Identify if the distribution system supplied electricity to other loads that are not relevant to the project (to avoid measuring unwanted loads).</li>
  <li>Identify the wiring configuration of the distribution system. This will determine how to set up the logger and sensors.</li>
  <li>Clamp the sensors around the electrical wires. Make sure they are facing the right direction, or else the current may be recorded with negative values.</li>
  <li>Based on the wiring configuration and instructions from the equipment’s user manual, install the sensor and logger to measure the power and energy to the system.</li>
</ul>

This section illustrates the most common wire configurations for a panelboard and how the Dent EliteProXC data logger is connected.  

### Single-phase Wire Configuration

<a href="">
<figure class="figure mb-3 mt-3">
  <img src="/images/measurement-technique/electrical_energy/electrical_energy_figure2.png" class="figure-img img-fluid rounded" alt="Figure 2. Single phase, two-wire. Image courtesy of ELOG19 software configuration diagram">
  <figcaption class="figure-caption text-left">Figure 2. Single phase, two-wire. Image courtesy of ELOG19 software configuration diagram</figcaption>
</figure>
</a>

<a href="">
<figure class="figure mb-3 mt-3">
  <img src="/images/measurement-technique/electrical_energy/electrical_energy_figure3.png" class="figure-img img-fluid rounded" alt="Figure 3. Typical single phase, three-wire (sometimes called split-phase). Image courtesy of ELOG19 software configuration diagram.">
  <figcaption class="figure-caption text-left">Figure 3. Typical single phase, three-wire (sometimes called split-phase). Image courtesy of ELOG19 software configuration diagram.</figcaption>
</figure>
</a>

### Three-phase Wire Configuration

<a href="">
<figure class="figure mb-3 mt-3">
  <img src="/images/measurement-technique/electrical_energy/electrical_energy_figure4.png" class="figure-img img-fluid rounded" alt="Figure 4. Typical 3-phase, 3-wire setup (delta). Image courtesy of ELOG19 software configuration diagram.">
  <figcaption class="figure-caption text-left">Figure 4. Typical 3-phase, 3-wire setup (delta). Image courtesy of ELOG19 software configuration diagram.</figcaption>
</figure>
</a>

<a href="">
<figure class="figure mb-3 mt-3">
  <img src="/images/measurement-technique/electrical_energy/electrical_energy_figure5.png" class="figure-img img-fluid rounded" alt="Figure 5: Typical 3-phase, 4-wire setup (Wye). Image courtesy of ELOG19 software configuration diagram.">
  <figcaption class="figure-caption text-left">Figure 5: Typical 3-phase, 4-wire setup (Wye). Image courtesy of ELOG19 software configuration diagram.</figcaption>
</figure>
</a>

Figure 5 displays the power logger installed on a panel with a Wye configuration. In the image, the blue rings are Rogowski current transformers that measure current. The black, red and blue voltage clips are connected at the lugs to measure voltage. The white voltage clip is connected to the ground line.

<a href="https://youtu.be/Fel5t-KzTO0?si=2VCuofNPz3o-OPrW">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/electrical_energy/electrical_energy_figure6.png" class="figure-img img-fluid rounded zoom" alt="Figure 6. Power logger installed at a power panel that had a Wye configuration.">
  <figcaption class="figure-caption text-left">Figure 6. Power logger installed at a power panel that had a Wye configuration.</figcaption>
</figure>
</a>

### 3. Verify Data is Being Collected

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or a phone with the manufacturer’s proprietary software installed to do the following: 

<ul>
  <strong><li>Do not remove the logger. (If you move the logger, then you may need to start over with the setup and installation process​​​.​​)</li></strong>
  <li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.</li>
  <li>Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.</li>
  <li>Determine if the results align with the expected operation of the system or component based on observed operational patterns or known equipment schedules.</li>
</ul>

<a href="https://youtu.be/gbChGMLI7W8?si=AgYuoiOdORG-deSX">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/electrical_energy/electrical_energy_figure7.png" class="figure-img img-fluid rounded zoom" alt="Figure 7: Plot graph of energy (kWh) over several days. This data was measured with the Dent power logger. The plot graph was generated with the ELOG19 software.">
  <figcaption class="figure-caption text-left">Figure 7: Plot graph of energy (kWh) over several days. This data was measured with the Dent power logger. The plot graph was generated with the ELOG19 software.</figcaption>
</figure>
</a>

### 4. Retrieve Measurement Equipment and Download Data

After verifying that the logger is collecting data, do the following: 

<ul>
  <li>Allow the logger to collect data for the remainder of the measurement period.</li>
  <li>After the measurement period has concluded, remove the logger from the panel.</li>
  <li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.</li>
  <li>Use the proprietary software to Stop the logger and end data collection.</li>
  <li>Download all data from the logger and save the file in the .csv file format for analysis.</li>
</ul>

<a href="https://youtu.be/fLDJ8E2pa9A?si=Iwx027Ogo7QMUpl6">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/measurement-technique/electrical_energy/electrical_energy_figure8.png" class="figure-img img-fluid rounded zoom" alt="Figure 8: Final data table in .csv format. Data was extracted from the Dent EliteProXC logger using the ELOG19 software and exported for analysis.">
  <figcaption class="figure-caption text-left">Figure 8: Final data table in .csv format. Data was extracted from the Dent EliteProXC logger using the ELOG19 software and exported for analysis.</figcaption>
</figure>
</a>

## Troubleshooting

<strong>Problem:</strong> Unexpected Negative Readings 

<strong>Solution:</strong> Confirm that all current transformers (CTs) are facing the correct direction. 

<strong>Problem:</strong> Unexpected Low Values 

<strong>Solution:</strong> Confirm that the current rating for the electrical distribution system is within the range of the current rating for the CTs. 

<strong>Problem:</strong> CTs Do Not Fit in Panelboard Casing 

<strong>Solution:</strong> If it is safe to do so, trace the wires outside the panel board and install the sensors there. If this is unsafe or not possible to do, consider following an alternative approach of measuring current to the system with either instantaneous true power or nameplate data as a proxy for total power draw and energy consumption.
