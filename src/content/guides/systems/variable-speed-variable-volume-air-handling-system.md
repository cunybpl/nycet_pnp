---
title: Variable-Speed, Variable-Volume Air Handling Unit
type: system
excerpt: A variable-speed, variable-volume (VSVV) air handling system conditions provides conditioning to mixed air (a combination of outdoor and return air), discharges the conditioned air into zones, returns air from the zones, and exhausts air to the outdoors.
thumbnail_image: "images/plants/water-cooled-chilled-water-plant/chilled-water-plant-overview.jpeg"
system_id: 10
associated_systems: 
  - Dual-Speed Air Handling Unit
  - Constant-Speed, Constant-Volume Air Handling Unit
related_components:
  - Variable-Speed, Variable-Volume Fan and Motor
  - L-t-A Heat Exchanger
borrow_equipment_url: 
layout: guide
url: "/documents/systems/variable-speed-variable-volume-air-handling-system"
---

## Detailed Description of a Variable-Speed, Variable-Volume Air Handling Unit System 

A variable-speed, variable-volume (VSVV) air handling system conditions provides conditioning to mixed air (a combination of outdoor and return air), discharges the conditioned air into zones, returns air from the zones, and exhausts air to the outdoors. The served zones are typically equipped with variable air volume boxes (VAV) which allow for zone-specific control of supply airflow. The overall airflow of the air handling unit (AHU) is modulated using variable frequency drives (VFDs) on the supply and return fan motors based on how much air the VAV boxes require. For a more detailed description of the system, refer to the ASHRAE HVAC Systems and Equipment Handbook (2020), Section 4. 

## Variable-Speed, Variable-Volume Components 

The major components of a VSVV system are the fans and motors, motor VFDs, heat exchanger coils, dampers, and VAV boxes. The components associated with the VSVV are shown in Figure 1. In general, the mixed air is conditioned by heating or cooling coils that use the output of the heating or cooling loops, using mechanical valves to regulate the amount of energy introduced to the coils. Supply and return fans with VFDs and dampers control airflows inside the main AHU. Dampers in the VAV boxes control zone airflows. Occasionally a VAV box will also be equipped with a supply fan.  

<a href="/images/systems/variable-speed-variable-volume-air-handling-unit/variable speed variable volume ahu figure 1.png">
    <figure class="figure mb-4 mt-3">
        <img src="/images/systems/variable-speed-variable-volume-air-handling-unit/variable speed variable volume ahu figure 1.png" class="figure-img img-fluid rounded" alt="Figure 1. Variable-Speed, Variable-Volume Components">
        <figcaption class="figure-caption text-left">Figure 1. Variable-Speed, Variable-Volume Components</figcaption>
    </figure>
</a>

### AHU Fan Motors and Variable Frequency Drives 

The fan motors with VFDs provide pressure in the system to move air through the duct work. Typically, fans are placed on the return and supply side of the unit to maintain proper airflow. The air is blown through filters and heat exchanger coils to be conditioned. Fan speeds are varied based on the need for conditioned or ventilation air in the zones served.  

### Heat Exchanger (Heating/Cooling Coils) 

The heat exchanger includes a set of heating and cooling coils, which provide heating or cooling to the air before it is discharged from the AHU. Mechanical valves regulate the amount of energy introduced from the loop to the heat exchangers which control the energy supplied to the discharge air.  

### Dampers 

Dampers are generally interlocked and are controlled to supply appropriate quantities of fresh air to the AHU and exhaust air to the outdoors. The dampers can also be set to maintain desired building pressures.  

### Variable Air Volume (VAV) Box 

A device that includes a damper to control zone specific airflow. A VAV box is sometimes equipped with a fan based on the overall system design. VAV boxes are typically equipped with reheat coils to prevent over-cooling of zones with low cooling loads and high ventilation air requirements.  

## Key Values Needed to Assess Energy Consumption 

The energy consumption of a VSVV air handling system is electricity for the fan motors and VFD, thermal energy for heating or cooling across the VSVV AHU heat exchanger and the electricity or thermal energy used at the VAV reheat boxes. Table 1 provides a summary of the components and operating characteristics of a variable speed system. 

<table>
    <caption>Table 1</caption>
    <thead>
        <tr>
            <th>
                <p><strong>System Quantification</strong></p>
            </th>
            <th>
                <p><strong>Values to be Quantified</strong></p>
            </th>
            <th>
                <p><strong>Energy Consuming Component</strong></p>
            </th>
            <th>
                <p><strong>Measurements</strong></p>
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>AHU power consumption</p>
            </td>
            <td>
                <p>Average hourly fan motor kWh</p>
                <p><br></p>
            </td>
            <td>
                <p>Fan motors and associated VFDs</p>
            </td>
            <td>
                <p>Average hourly true RMS energy; outside air temperature (if VFD is temperature dependent)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>AHU heating/cooling load on building</p>
            </td>
            <td>
                <p>Average hourly thermal load of heating/cooling coils (Btuh)</p>
                <p><br></p>
            </td>
            <td>
                <p>Heating/cooling coils</p>
            </td>
            <td>
                <p>Airflow rate and temperature difference across the heating/cooling coil</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>VAV boc consumption (if applicable)</p>
            </td>
            <td>
                <p>Average hourly reheat kWh</p>
                <p><br></p>
            </td>
            <td>
                <p>Electric reheat coil (if present)</p>
            </td>
            <td>
                <p>Average hourly true RMS energy</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>VAV box consumption (if applicable)</p>
            </td>
            <td>
                <p>Average hourly thermal load reheat coils (Btuh)</p>
                <p><br></p>
            </td>
            <td>
                <p>Hot water or steam reheat coil</p>
            </td>
            <td>
                <p>Airflow rate and temperature difference across the heating/cooling coil</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>VAV box consumption (if applicable)</p>
            </td>
            <td>
                <p>Average hourly fan motor kWh</p>
                <p><br></p>
            </td>
            <td>
                <p>Fan motor (if present)</p>
            </td>
            <td>
                <p>Average hourly true RMS energy</p>
            </td>
        </tr>
    </tbody>
</table>

## Variable-Speed, Variable-Volume System Measurement Point Locations

The measurement locations for a VSVV air handling system are schematically shown in Figure 2.

<a href="/images/systems/variable-speed-variable-volume-air-handling-unit/variable speed variable volume ahu figure 2.png">
    <figure class="figure mb-4 mt-3">
        <img src="/images/systems/variable-speed-variable-volume-air-handling-unit/variable speed variable volume ahu figure 2.png" class="figure-img img-fluid rounded" alt="Figure 2. Measurement points location at the VFD as well as the VAV box">
        <figcaption class="figure-caption text-left">Figure 2. Measurement points location at the VFD as well as the VAV box</figcaption>
    </figure>
</a>

## References

ASHRAE (2014). “ASHRAE Guideline 14-2014 – Measurement of Energy, Demand, and Water Savings.” Annex A. 

ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 1. HVAC SYSTEM ANALYSIS AND SELECTION. I-P Edition. 

ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 4. AIR HANDLING AND DISTRIBUTION. I-P Edition.  
 
Li, Y. (2015). “Variable Frequency Drive Applications in HVAC Systems”, in M. Chomat (ed.), New Applications of Electric Drives, IntechOpen, London. 10.5772/61782. 