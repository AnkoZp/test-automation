This is the basic project for TS
Recommended config for programming on TS >  https://coda.io/d/QA-Automation_d3DDrmEyeIe/TS_suhLQUIn#_lutrAdCg

Project Structure
Transport is an interface that defines a common contract for all vehicles.
BaseTransport is an abstract class that implements the basic behavior (startEngine, setSpeed, getInfo, etc.).
Car, ElectricCar, Airplane are specific implementations that inherit from the base class and add their own specifics.

How to Run
Run files one by one using ts-Node:
ts-node .\src\main.ts