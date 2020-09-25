package com.compucompare.compucompare.computerType;

import com.compucompare.compucompare.components.*;

import java.util.List;

public class Laptop extends Computer{

    private DisplayComponent display;
    private BatteryComponent battery;

    public Laptop(String brand, String model, CPUComponent processor,
                  GPUComponent graphics, RAMComponent ram,
                  List<StorageComponent> storage, List<NetworkComponent> interfaces,
                  DisplayComponent display, BatteryComponent battery){
        super(brand, model, processor, graphics, ram, storage, interfaces);
        this.display = display;
        this.battery = battery;
    }

    public DisplayComponent getDisplay() {
        return display;
    }

    public BatteryComponent getBattery() {
        return battery;
    }
}
