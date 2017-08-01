# (Z.Sanders) Why a weather app and objective
  - Why a weather application
    + what skill set we wanted to learn
    + focus on data acquisition
    + used external api for acquisition of historical data and remote data
    + create own data for comparison
# (A.Graupman) Basic Technologies
  - React/Rails
    + React provides a dynamic client-side interface for improved user experience
    + Rails provides a JSON based Api for data acquisition and modification with
      minimal network load. Facilites accessing external remote APIs and improves
      data parsing and manipulation. Allows the incorporation of gem that handle
      temperature data triangulation.
    + PostgreSQL is a versitial database that works on many different plateforms
    + Highcharts is a predefined template for displaying data in graphical manner
# (B.Langston) How the user interacts with the data
  - Technologies
    + Arduino Board:
    + AdaFruit Sensors:
    + Firmata Firmware:
    + Raspberry Pi 3 Board: 
  - how it is pulled in via the arduino
    + Node
      - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
        Node.js uses an event-driven, non-blocking I/O model that makes it
        lightweight and efficient.
    + Johnny-Five
      - Johnny-Five is the JavaScript Robotics & IoT Platform.
      - The Internet of things (IoT) is the inter-networking of physical devices,
        vehicles (also referred to as "connected devices" and "smart devices"),
        buildings, and other items embedded with electronics, software, sensors,
        actuators, and network connectivity which enable these objects to collect
        and exchange data.
    + PG midleware
      - OpenSource
      - Advanced
  - how to use the graphs
    + query historic data
    + overlay actual with historic data
    + overlay actual with actual
  - interprete the data.
    + Look for trends over time
    + Query specific Data points
    + Different temps measurements
  - User can store local data and compare
    + Storage from several different devices and locations
  - RaspberryPi wireless hub for data uploading to a remote database
