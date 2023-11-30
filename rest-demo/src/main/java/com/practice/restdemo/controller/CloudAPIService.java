package com.practice.restdemo.controller;

import com.practice.restdemo.model.CloudVendor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cloudvendor")
public class CloudAPIService {
    public CloudVendor getCloudVendorDetails(String vendorId) {
        return new CloudVendor("C1", "Vendor 1", "Address one", "xxxx");
    }
}
