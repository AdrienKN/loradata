---
outline: deep
---
<div style="text-align: justify"> 

## Build your own sensor
### Ready-to-use sensor with LoRAWAN converter
There are many ways to build a LoRaWAN sensor. The easiest one consist of pluging-in a sensor to an [LoRaWAN converter](https://eu.robotshop.com/fr/products/dragino-rs485-ln-rs485-to-lorawan-converter-868-mhz?gad_source=1&gclid=Cj0KCQjwqP2pBhDMARIsAJQ0Czo4W4Ad2Rkd8LrDPtcQDqOVRrOA1BdEKZSq0wmOhdydOwMRTf4MdNUaAlJJEALw_wcB), as sold by Arduino. 
This method is simple by avoidind coding, but is quite expansive.

### Homemade sensor
The second main method we are going to present here is more complex, but much more economic. We will build our sensor from A to Z, by implementing the code to communicate with a LoRaWAN Gateway. Let's illustrate it with concrete examples.

#### With Feather M0
***WaziLab* [soil moisture active sensor](https://lab.waziup.io/solutions/waziup/automatic-irrigation) :**

This soil moisture sensor is directly linked with a water pump, to manage automaticly water spully for plants. To do nthis, they used : 
| Component | Description |
| --- | --- |
| WaziAct (= Feather M0 + power relay to control waterpump) | Adafruit Feather M0 Long Range (LoRa) Radio is a microcontroller with a LoRa packet radio transceive. |
| FT232 FTDI module with Mini USB Cable | USB to TTL Serial Converter Adapter Module. |
| Soil Moisture Sensor | |
| Submersible Water Pump | |
| Some Jumper Wires | |
| Power Supply | |
| Antenna | |
| | **Total** | 150-200€ |

::: details How to choose the right antenna ?
Depending on the terrain, it is necessary to adapt the gain of the antenna, so its capcity to focus the output signal in an specific diection. Bigger is the gain (around 8dBi), less the signal is diffuse. ([GME](https://www.gme.net.au/au/news/understanding-antenna-gain-and-dbi/), 2024)

<img src='../public/gain_antenna.jpg' 
        alt="Unavailable content"
        style="display: slock; margin: 0 auto"
        width="400" height="500" />


In large flat areas, an antenna with a strong gain is interesting. Contrarirly, in rugged zones, it is better to have an antennna with a weaj gain, or an unity gain (2.1dBi).

Antennas with a strong gain are obviously more expansive, compared to [unity gain antennas](https://shop.imst.de/wireless-modules/accessories/19/sma-antenna-for-ic880a-spi-wsa01-im880b-and-lite-gateway). In our case of study, the best solution would be to take antennas with [intermediate gain](https://www.distrelec.fr/fr/antenne-wi-fi-blanc-dbi-rp-tnc-male-168-5mm-vis-cisco-air-ant2524dw/p/30244239?trackQuery=cat-DNAV_PL_3525686&pos=2&origPos=2&origPageSize=50&track=true&sid=fcfebca9204ef3f78f3df2c3975f650e60a4bdb0), around 4dBi.
:::

**Tetraneutral [temperature sensor](https://docs.lora.tetaneutral.net/tutorials/capteur-temperature/) :** 

| Component | Description |
| --- | --- |
| [M0 Feather](https://www.adafruit.com/product/3178) | Adafruit Feather M0 Long Range (LoRa) Radio is a microcontroller with a LoRa packet radio transceive. |
| [Sensor](https://fr.rs-online.com/web/p/thermistances/1241082) | Water temperature sensor |
| [Antenna](https://www.distrelec.fr/fr/antenne-wi-fi-blanc-dbi-rp-tnc-male-168-5mm-vis-cisco-air-ant2524dw/p/30244239?trackQuery=cat-DNAV_PL_3525686&pos=2&origPos=2&origPageSize=50&track=true&sid=fcfebca9204ef3f78f3df2c3975f650e60a4bdb0) | |
| | **Total** | 100-150€ |

#### With Rasberry-Pi
***WaziLab* [weather station](https://lab.waziup.io/solutions/waziup/weather-station) :**

They created a [complete LoRaWAN weather station](https://lab.waziup.io/solutions/waziup/weather-station
) with the following components : 
| Component | Description |
| --- | --- |
| SparkFun Weather Shield Kit | The SparkFun Weather Shield is an easy-to-use Arduino shield that grants you access to barometric pressure, relative humidity, luminosity and temperature.  |
| SparkFun Weather Meter Kit | Includes Wind Vane, Cup Anemometer and Tipping Bucket Rain Gauge to measure wind speed, wind direction, and rainfall. |
| Arduino Uno with USB Cable | |
| Lora SX1276 Breakout Board | Long Range Transceiver based on the SX1276 chipset. |
| Some Jumper WiresM0 | |
| Power Supply | |
| | **Total** | **175-225€** |

::: danger WARNING
Home-made sensors are not water proof. If you plan to use it outdoors, remember to store it in a waterproof case. You can find it easily online :
- [Sonoff](https://www.domotique-store.fr/accessoires/6980-boitier-etanche-sonoff-ip66.html?gad_source=1&gclid=Cj0KCQjwwYSwBhDcARIsAOyL0fhNxBflWlKDEHmuZ8Z2kmjT_SMlFDURXIc6uCBC8RuWNV-gFOm5sroaAp15EALw_wcB)
- [Temu](https://www.temu.com/fr/kuiper/n9.html?subj=googleshopping-landingpage&_bg_fs=1&_p_rfs=1&_x_ads_channel=google&_x_ads_sub_channel=shopping&_x_login_type=Google&_x_vst_scene=adg&mkt_rec=1&goods_id=601099530113542&sku_id=17592275353926&_x_ns_sku_id=17592275353926&_x_gmc_account=742384653&_x_ads_account=5198328713&_x_ads_set=20819421092&_x_ads_id=153466930022&_x_ads_creative_id=682926604759&_x_ns_source=g&_x_ns_gclid=Cj0KCQjwwYSwBhDcARIsAOyL0fjazpugY7K59j_NqG2mBReFrweP6MeJnG7jbpJx5hSc4TLR0CePiiQaAp3ZEALw_wcB&_x_ns_placement=&_x_ns_match_type=&_x_ns_ad_position=&_x_ns_product_id=17592275353926&_x_ns_target=&_x_ns_devicemodel=&_x_ns_wbraid=Cj4KCAjwnv-vBhBvEi4ADXlqcNO2KeMucE1s9ZlANb8-vDJV5P9fxNeMTwQljU9a169SipcPuHiWwGzZGgK_zA&_x_ns_gbraid=0AAAAAo4mICGWvyK0gbxLYzuwuhaS0WMNx&_x_ns_targetid=pla-2260871609456&gad_source=1&gclid=Cj0KCQjwwYSwBhDcARIsAOyL0fjazpugY7K59j_NqG2mBReFrweP6MeJnG7jbpJx5hSc4TLR0CePiiQaAp3ZEALw_wcB&adg_ctx=f-87174f24)
:::


#### Type of sensor advantages and disadvantages
<center>

| | LoRaWAN converter | With Feather M0 | With Rasberry-Pi |
|:-:|:-:|:-:|:-:|
| Autonomy | - | + | - |
| Adaptability | - | + | + |
| Price | - | + | + |
| Accessibility | + | - | - |
| Waterproof | + | - | - |
| Range | + | + | + |

</center>

## Configure your sensor
## Add your sensor to ChirpStack
### Device profile
For each new device you want to declare, you must link it with a device profile.

In your ChirpStack Network Server web interface, select your tenant and go into the *Device Profiles* section. Click on *Add device profile*.

If you bought a ready-to-use device, you may find a pre-defined device profile in the [ChirpStack Device-templates database](https://www.chirpstack.io/docs/chirpstack/use/device-profile-templates.html).

If you build your sensor by yourself, you must fill the form manually. You must pay attention to several points.

#### *Join (OTAA / ABP)* 
Select the way of connection you want to use for your sensor. 

- Over-the-Air Activation (OTAA) : device follows a joining process in wich encryption keys are defined automaticly over the air.
- Activation by Personalization (ABP) : encryption keys are defined in scripts. This connexion way is less flexible and less secure than OTAA.

#### *Codec* 
enter the JS script to allow ChirpStack to decode incoming signal from your sensor. 

For a commercial sensor, this codec is usually provided by the construtor. For an homemade sensor, you must write it, regarding the code you implemented in your sensor.

The main rule to follow to write your codec is to define a function *decodeUplink()* that ChirpStack will use to decode the incomming message from your sensor.

::: details Codec example

This one has been done to decode a simple buffer encrypted in Base64 and containing two measures : temperature and humidity.

```js
function decodeUplink(input) {
    let str = '';
    let decimalArray = input.bytes

    for (let i = 0; i < decimalArray.length; i++) {
    str += String.fromCharCode(parseInt(decimalArray[i], 10));
    }
    decoded = {}
    decoded.temperature = +[str[5] + str[6] + str[7] + str[8] + str[9]]
    decoded.humidity = +[str[15] + str[16] + str[17] + str[18] + str[19]]

    return { data : decoded }
}
```
:::


### Define an Application

Before declaring your sensor, you must define an *Application* to link with. To do this, go into the *Applications* section and click on *Add application*

Fill in the form and *Submit*.

### Declare your device

Go into the *Applications* section. The application you just defined appears. Click on it. 

Click on *Add device* and fill-in the form. Enter the name you want for your sensor and its Device EUI, provided by the constructor or defined in the device script.

Select the device profile corresponding to your device, and *Submit*.

Your device is declared ! 

Click on your device, and go to *event* section. You can see now LoRaWAN frames from your sensor. Congratulations ! 

</div>