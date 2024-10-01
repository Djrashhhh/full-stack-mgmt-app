package com.taskstracking.inventory.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.taskstracking.inventory.domains.Issuing;
import com.taskstracking.inventory.service.IssuingService;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class IssueController {

    @Autowired
    private IssuingService issuingService;

    @PostMapping("/issuing")
    public ResponseEntity<Issuing> issueDevice(@RequestBody Issuing issuing) {
        Issuing createdIssuing = issuingService.issueDevice(issuing);
        return ResponseEntity.ok(createdIssuing);
    }

    @GetMapping("/issuing")
    public ResponseEntity<List<Issuing>> getAllIssuings() {
        try {
            List<Issuing> issuings = issuingService.getAllIssuedDevices();
            return ResponseEntity.ok(issuings);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null); // Handle exceptions appropriately
        }
    }


    @PutMapping("/issuing/{id}/status")
    public ResponseEntity<Issuing> updateIssuingStatus(@PathVariable Long id, @RequestBody String status) {
        Optional<Issuing> optionalIssuing = issuingService.getIssuingById(id);
        if (!optionalIssuing.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Issuing issuing = optionalIssuing.get();
        issuing.setStatus(status);
        issuingService.saveIssuing(issuing);

        return ResponseEntity.ok(issuing);
    }
    
    @DeleteMapping("/issuing/{id}")
    public ResponseEntity<Void> deleteIssuing(@PathVariable Long id) {
        issuingService.deleteIssuing(id);
        return ResponseEntity.noContent().build();
    }
}
