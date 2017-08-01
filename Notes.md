# (Z.Sanders) Why a weather app and objective
  - Why a weather application
    + what skill set we wanted to learn
    + focus on data acquisition
    + used external api for acquisition of historical data and remote data
    + create own data for comparison
# Basic Technologies
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
    + Arduino Uno Boards are the most robust micro-electronic boards. They
      provide robust electrical diagrams and documentation for a variety of
      micro-sensor and controllers. The Boards can be interacted with
      programmatically with various IoT languages (NodeJS).
    + AdaFruit provides reliable sensors that interface well with arduino boards
      while requiring minimal electrical modifications.
    + Firmata Firmware provides communication between node and the electrical
      hardware.
    + Raspberry Pi readily interfaces with arduino micro-electronics while providing
      a minimal operating system that can be used as a middleware environment for
      remote access to servers.
  - how it is pulled in via the arduino
    + Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
      Node uses an event-driven, non-blocking I/O model that makes it
      lightweight and efficient for a variety of applications.
    + Johnny-Five
      - Johnny-Five is the JavaScript Robotics & IoT Platform.
      - The Internet of things (IoT) is the inter-networking of physical devices
        and embedded electronics which enable the collection and exchange of data.
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
