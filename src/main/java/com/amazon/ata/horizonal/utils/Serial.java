package com.amazon.ata.horizonal.utils;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class Serial {
    public static Map<String, String> serial(String message){
        Map<String, String> map = new HashMap<>();
        map.put("message", message);
        return  map;
    }
}
