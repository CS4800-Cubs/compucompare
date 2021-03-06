package com.compucompare.compucompare.routines;

import com.compucompare.compucompare.network.GeekbenchCPUSource;
import com.compucompare.compucompare.network.GeekbenchGPUSource;
import com.compucompare.compucompare.network.ComputerSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Profile({"dev", "production"})
@Component
public class DatabaseUpdateTask
{
    @Autowired
    GeekbenchCPUSource cpuData;

    @Autowired
    GeekbenchGPUSource gpuData;

    @Autowired
    ComputerSource laptopData;

    @Scheduled(fixedDelay = 86400000, initialDelay = 0)
    public void updateDatabase()
    {
        System.out.println("Scheduled Update Tasks Starting...");
        cpuData.updateDatabase();
        gpuData.updateDatabase();
        laptopData.updateDatabase();
    }
}