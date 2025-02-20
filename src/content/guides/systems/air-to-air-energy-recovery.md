---
title: Air-to-air Energy Recovery 
type: system
excerpt: Uses heat exchangers to transfer heat from the outgoing air stream (return air) to the incoming air stream (outdoor air).
thumbnail_image: "/images/systems/air-to-air-energy-recovery/2024_0710_AtA energy recovery system_thumbnail_RESIZED.jpg"
system_id: 16
associated_components:
  - Air-to-air Heat Exchanger
related_components:
  - Air-to-air Heat Exchanger
borrow_equipment_url: ""
layout: guide
url: "/documents/systems/air-to-air-energy-recovery"
---

## General Overview 

An air-to-air energy recovery (AAER) system consists of a heat exchanger component, air ducts and any associated device for its operation. AAER systems extract sensible (and sometimes latent) energy from a previously conditioned “outgoing” airstream and use that energy to pre-condition a separate “incoming” air stream. Typically, the outgoing airstream is drawn from occupied spaces in a building, and the incoming air is from the outdoors.  The two airstreams must be at different temperatures for sensible heat transfer and different moisture contents for latent transfer. For a more detailed description of the system, refer to the ASHRAE HVAC Systems and Equipment Handbook (2020), Chapter 26.

## Components

Figure 1 shows the main components associated with a fixed plate heat exchanger including the heat exchanger, air ducts and fan and motors. In a AAER with a rotary wheel heat exchanger there is also a motor used to power the rotary wheel.

<a href="/images/systems/air-to-air-energy-recovery/Air-to-air Recovery System Figure 1.png">
    <figure class="figure">
        <img src="/images/systems/air-to-air-energy-recovery/Air-to-air Recovery System Figure 1.png" class="figure-img img-fluid rounded" alt="Figure 1. Air-to-air heat recovery system with fixed plate each exchanger.">
        <figcaption class="figure-caption text-left">Figure 1. Air-to-air heat recovery system with fixed plate each exchanger (click on image to enlarge).</figcaption>
    </figure>
</a>

### Heat Exchangers

The heat exchanger transfers energy between the two airstreams.  The most common air-to-air heat exchangers as defined by ASHRAE are listed below. The energy transfer effectiveness in a heat exchanger relies on its configuration, the material properties of the energy exchange surface, and a design that maximizes the contact of the airstream with the heat exchange surface. 

#### Rotary Air-to-air Energy Exchanger

A rotary wheel exchanger consists of a belt driven wheel that is built up by a matrix of foils. The wheel rotates and moves through both the incoming and outgoing air streams, effectively transferring heat between them. The pressure drop and efficiency of the exchanger depends on the wheel diameter and density of corrugation. Most rotary wheel exchangers transfer both sensible heat and latent energy. Figure 3 shows an example of a rotary wheel heat exchanger.
<a class="continue" href="/documents/components/air-to-air-heat-exchanger"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>

<a href="/images/systems/air-to-air-energy-recovery/Air-to-air Recovery System Figure 3.png">
    <figure class="figure">
        <img src="/images/systems/air-to-air-energy-recovery/Air-to-air Recovery System Figure 3.png" class="figure-img img-fluid rounded" alt="Figure 3. Rotary air-to-air energy exchangers.">
        <figcaption class="figure-caption text-left">Figure 3. Rotary air-to-air energy exchangers (click on image to enlarge).</figcaption>
    </figure>
</a>

#### Fixed Plate Heat Exchanger

A fixed plate heat exchanger functions by providing neighboring channels, separated by plates, for airstreams to pass through and transfer energy. The channel separation determines both the pressure drop and efficiency of the heat exchanger. Many fixed plate heat exchangers only transfer sensible heat, but they can be designed to transfer latent energy (i.e., moisture) as well, depending on the material used.

#### Coil Energy Recovery (Runaround) Loop

Coil energy recovery loops, also known as runaround loops, make use of a heat exchanging coil that connects the incoming and outgoing exhaust air streams. The loop contains a heat transfer fluid (i.e., water, glycol) and a pump to move the liquid between both streams. Coil energy recovery loops transfer sensible heat only.

#### Heat Pipe Heat Exchanger

Heat pipe heat exchangers operate by using a working fluid that changes phases to transfer heat. As shown in Figure 5, one side of the heat pipe is placed in the exhaust stream and the other is placed in the supply stream, causing one side of the pipe to undergo evaporation and the other side to undergo condensation, effectively transferring heat. Heat pipe heat exchangers transfer sensible heat only. 

{{< admonition type="note">}}
See Chapter 26 of the ASHRAE Handbook on Heating, Ventilating, and Air-Conditioning Systems and Equipment for discussion of these and other heat exchangers. 
{{< /admonition >}}

### Air Duct 

Ducts transport air to and from served zones, heat recovery units and air handling units. Duct systems often include dampers and turning vanes to control flow volume and reduce pressure losses which can directly impact system efficiency. 

### Rotary Air-to-Air Energy Exchanger Motor 

Most heat exchangers are passive devices and rely on the fan and motor components in other systems to move air through them. In the case of a rotary air-to-air energy exchanger the heat exchange medium is rotated through the airstreams, where the exchanger medium picks up or releases heat and possibly moisture. A small constant or variable speed motor is needed to rotate the heat exchanger.

## Evaluation of Energy Consumption

The primary effect of air-to-air energy recovery is to reduce fuel and/or electricity consumption by capturing waste heat. A heat exchanger will increase the static pressure in the air streams which requires additional fan motor energy. In a rotary wheel configuration, the motor that drives the wheel should be considered when estimating the energy impact. The impact of the AAER on both temperature and humidity must be considered to gain a full picture of its energy impact. 

Table 1 provides a summary of the components to measure to arrive at values needed to quantify the annual energy consumption of a heat recovery system.  

<div class="table-wrapper">
<table>
    <caption>Table 1. Key values and measurements to evaluate heat transfer.</caption>
    <thead>
        <tr>
            <th>
                System Quantification
            </th>
            <th>
                Values to be Quantified
            </th>
            <th>
                Energy Saving Component
            </th>
            <th>
                Measurements
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Heat Recovered
            </td>
            <td>
                Average hourly <a class="glossary-link" href="/glossary#btu"><abbr title="British Thermal Unit">Btu</abbr></a> recovered
            </td>
            <td>
                <a href="/documents/components/air-to-air-heat-exchanger">Heat Exchanger</a>
            </td>
            <td>
                <ul>
                    <li><a href=>Average hourly incoming (outdoor) airflow (CFM)</a></li> 
                    <li><a href="/documents/measurement-technique/system-air-temperature">Average hourly incoming air stream temperatures on each side of heat exchanger</a></li>
                    <li><a href="/documents/measurement-technique/relative-humidity">Average hourly humidity on each side of heat exchanger</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                Heat recovery system electricity consumption (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) (if applicable)
            </td>
            <td>
                Average hourly fan motor (and rotary wheel motor if applicable) <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>
            </td>
            <td>
                <a href="/documents/components/variable-speed-variable-volume-fan-and-motor">Fan motor (and rotary wheel motor if applicable)</a>
            </td>
            <td>
                <a href="/documents/measurement-technique/true-rms-power">Hourly measurement of true RMS power</a>
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Measurement Locations

The measurement locations for a heat recovery system are shown in Figure 7. 

<a href="/images/systems/air-to-air-energy-recovery/Air-to-air Recovery System Figure 7.png">
    <figure class="figure">
        <img src="/images/systems/air-to-air-energy-recovery/Air-to-air Recovery System Figure 7.png" class="figure-img img-fluid rounded" alt="Figure 7. Air-to-air energy recovery measurement locations.">
        <figcaption class="figure-caption text-left">Figure 7. Air-to-air recovery measurement locations (click on image to enlarge).</figcaption>
    </figure>
</a>

## Further Reading 

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 1. HVAC SYSTEM ANALYSIS AND SELECTION. I-P Edition.  

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 26. AIR-TO-AIR ENERGY RECOVERY EQUIPMENT. I-P Edition.  

- CenterPoint Energy (2022). “Runaround Loops.” Energy Recovery Systems. https://www.centerpointenergy.com/en-us/Services/Pages/Runaround-loops-MN.aspx?sa=MN&au=bus 

- Heatex (2022). “Heat Exchanger Basics.” https://www.heatex.com/knowledge/heat-exchanger-basics. 
National Renewable Energy Laboratory (2003). “Laboratories for the 21st Century: Best Practices” https://www.nrel.gov/docs/fy04osti/34349.pdf 

- Paulina Kanaś (2019).” The influence of geometrical parameters on heat and mass transfer processes in rotary heat exchangers.” SN Applied Sciences. 
