---
title: Air Handling Plant
type: plant
excerpt: This plant conditions and distributes air in a facility to meet required indoor environmental conditions. This plant works in conjunction with heating and cooling plants.
thumbnail_image: "/images/plants/air-handling-plant/AHU_THUMBNAIL_RESIZED-01.jpg"
associated_systems:
  - Air-to-air Energy Recovery
  - Constant-speed, Constant-volume Air Handling Unit
  - Variable-speed, Variable-volume Air Handling Unit
related_systems:
  - Air-to-air Energy Recovery
  - Constant-speed, Constant-volume Air Handling Unit
  - Variable-speed, Variable-volume Air Handling Unit 
layout: guide
url: "/documents/plants/air-handling-plant"
---

## General Overview

The air handling plant (AHP) takes input energy (e.g., electricity, heated or chilled water) and conditions the air to meet required indoor environmental conditions (e.g., temperature, humidity, fresh air). The AHP may be made up of different types of air handling units (AHUs) at the system level (e.g., rooftop unit, fan coil unit, constant speed unit) which will be discussed at the system level descriptions. For a more detailed overview of various system configurations for this plant, please refer to the ASHRAE HVAC Systems and Equipment Handbook (2020), Section 4 – Air Handling and Distribution.

<a href="/images/plants/air-handling-plant/2024_0503_AHU plant_figure 1 updated.jpg">
    <figure class="figure mb-4 mt-3">
        <img src="/images/plants/air-handling-plant/2024_0503_AHU plant_figure 1 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Air Handling Plant.">
        <figcaption class="figure-caption text-left">Figure 1. Air Handling Plant (click on image to enlarge).</figcaption>
    </figure>
</a>

## Air Handling Plant Systems and Components

The systems and components that make up the air handling plant are listed and described further in Table 1 below. It should be noted that for a given AHP, there may be a mix of air handling systems installed (e.g., constant-speed, constant-volume, variable air volume) and configurations (e.g., split heat pump, rooftop unit). 

### Constant-speed, Constant-volume (CSCV) AHU

A CSCV air handling system provides heating, cooling and ventilation air to a space in a facility. The AHU is built on-site out of various sections. The volume of outside air in the AHU can be modulated from 0% (outside air damper fully closed) to a typical ventilation rate (minimum outside air damper position) and in some cases can provide 100% outside air (economizer mode).

<a href="/images/plants/air-handling-plant/2024_0503_AHU plant_figure 2 updated.jpg">
    <figure class="figure mb-4 mt-3">
        <img src="/images/plants/air-handling-plant/2024_0503_AHU plant_figure 2 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 2. CSCV Air Handling Unit Systems and Components.">
        <figcaption class="figure-caption text-left">Figure 2. CSCV Air Handling Unit Systems and Components (click on image to enlarge).</figcaption>
    </figure>
</a>

### Dual-speed, Constant-Volume (DSCV) AHU 

A DSCV system is similar to a CSCV system except the fan motors in the AHU have a high and low speed setting. This configuration allows the AHU to operate at a slower speed during setbacks during unoccupied times such as night or weekends.  

### Variable-air Volume AHU 

A VAV system consists of a main AHU and multiple VAV boxes that serve different zones. The AHU has fan motors that are equipped with variable frequency drives (VFDs) which allow the fan speed (and associated air volume) to modulate as the building demand changes. VAV boxes are installed in the supply air ductwork in the zones served and are generally installed with a heating coil, also known as a reheat coil. This enables the system to adjust the supply air temperature to prevent over-cooling a space. The VAV system allows for space temperature and ventilation air control in each zone. VAV boxes are usually set with a minimum damper position associated with the minimum required ventilation airflow needed for the zone.  

<a href="/images/plants/air-handling-plant/2024_0503_AHU plant_figure 3 updated.jpg">
    <figure class="figure mb-4 mt-3">
        <img src="/images/plants/air-handling-plant/2024_0503_AHU plant_figure 3 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 3. Air Handling Plant Systems and Components.">
        <figcaption class="figure-caption text-left">Figure 3. VAV Air Handling Plant Systems and Components (click on image to enlarge).</figcaption>
    </figure>
</a>

### Dedicated Outdoor Air System (DOAS) 

A DOAS system is designed to heat, cool, humidify, dehumidify and filter ventilation air independent of the space heating and cooling needs of a facility. A DOAS can generally provide limited space heating and cooling but only as a by-product of the required volumes of ventilation air provided to a space or zone.   

### Fan Coil Unit (FCU) 

A FCU is a smaller, factory-assembled device that is used to circulate and condition air.  

### Split Heat Pump (HP) 

A HP is a split system that provides heating or cooling and is comprised of an indoor unit with a fan and evaporator coil and an outdoor unit with a fan and condenser coil.  

### Fuel Fired Furnace  

A fuel burning device that heats air for space conditioning. 

### Rooftop Unit (RTU) 

A roof mounted packaged system that provides heating, cooling and ventilation and supplies air directly to the space below it or into a set of ducts. 

### Induction Unit (non-fan powered) 

A system that uses a fast-moving primary air stream (usually created by a set of nozzles) to induce air from the space to be drawn through the unit and mixed with the primary air stream. The primary air stream is generated by a separate system such as a CSCV AHU or a DOAS. 

## Evaluation of Energy Consumption

The energy consumption in an air handling plant is the sum of the energy used by each AHU system, including the electricity to power the supply and return fans and the energy needed to heat or cool the air through the AHU. Heating and cooling energy may come from a central heating or cooling plant or from an energy source processed directly at the AHU, such as natural gas for heating or electricity to drive compressor-based cooling. Table 1 provides a summary of system component measurements and values needed to quantify the annual energy consumption of an air handling plant.

<div class="table-wrapper">
<table>
    <caption>Table 1. Key values and components to measure to evaluate energy consumption.</caption>
    <thead>
        <tr>
            <th style="width: 40%;">
                System(s)
            </th>
            <th>
                Values to Quantify
            </th>
            <th style="width: 25%;">
                Energy Consuming Component
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                <ul>
                    <li>Constant-speed, constant-volume AHU</li>
                    <li>Dual-speed, constant-volume AHU</li>
                    <li>Variable air volume AHU</li>
                    <li>Dedicated outside air system</li>
                    <li>Fan coil unit</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Average hourly fan motor <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a></li>
                    <li>Average <a class="glossary-link" href="/glossary#btu"><abbr title="British Thermal Unit">Btu</abbr></a>/h at coils</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/components/constant-speed-constant-volume-fan-and-motor">Fan motors</a></li>
                    <li>Heating coil</li>
                    <li>Cooling coil</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                Heat pump
            </td>
            <td>
                Average hourly heat pump <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a> (includes supply and condenser fan motors and compressor motors)
            </td>
            <td>
                <ul>
                    <li><a href="/documents/components/constant-speed-constant-volume-fan-and-motor">Fan motors</a></li>
                    <li>Compressor</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                Fuel fired furnace
            </td>
            <td>
                <ul>
                    <li>Average hourly furnace fuel consumption</li>
                    <li>Average hourly burner <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a> (includes supply fan motors)</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Burner</li>
                    <li><a href="/documents/components/constant-speed-constant-volume-fan-and-motor">Fan motors</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                Rooftop Unit
            </td>
            <td>
                Average hourly fuel consumption: average hourly rooftop unit <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a> (includes supply and condenser fan motors and compressor motors)
            </td>
            <td>
                <ul>
                    <li>Burner</li>
                    <li><a href="/documents/components/constant-speed-constant-volume-fan-and-motor">Fan motors</a></li>
                    <li>Compressor</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                Induction Unit
            </td>
            <td>
                Average <a class="glossary-link" href="/glossary#btu"><abbr title="British Thermal Unit">Btu</abbr></a>/h at coils
            </td>
            <td>
                Heating coil
            </td>
        </tr>
    </tbody>
</table> 
</div>

## Further Reading

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 1. HVAC SYSTEM ANALYSIS AND SELECTION. I-P Edition.  

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 4. AIR HANDLING AND DISTRIBUTION. I-P Edition.  

- ASHRAE (2019). “ANSI/ASHRAE/IES Standard 90.1-2019 -- Energy Standard for Buildings Except Low-Rise Residential Buildings”. ASHRAE. 

- Taylor, S (2014). “Return Fans in VAV Systems”. ASHRAE Journal, Vol. 56; pp. 54-58.