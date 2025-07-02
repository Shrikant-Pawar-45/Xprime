package com.codewithshrikant.Appbackend;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final String galleryFilePath = "C:/Users/Welcome/Desktop/React_js/Xprime/Frontend/src/assets/galleryData.json";
    private final String trendingFilePath = "C:/Users/Welcome/Desktop/React_js/Xprime/Frontend/src/assets/trendingData.json";
    private final ObjectMapper objectMapper = new ObjectMapper();
    @PostMapping("/gallery")
    public ResponseEntity<String> saveGalleryData(@RequestBody String galleryData) {
        try {
            List<Map<String, Object>> newDataList = objectMapper.readValue(galleryData, new TypeReference<List<Map<String, Object>>>() {});
            List<Map<String, Object>> existingDataList;

            File file = new File(galleryFilePath);
            if (file.exists()) {
                existingDataList = objectMapper.readValue(file, new TypeReference<List<Map<String, Object>>>() {});
            } else {
                existingDataList = new java.util.ArrayList<>();
            }

            int maxId = existingDataList.stream()
                    .mapToInt(item -> item.get("id") == null ? 0 : (int) item.get("id"))
                    .max()
                    .orElse(0);

            for (Map<String, Object> item : newDataList) {
                if (item.get("id") == null || (int) item.get("id") == 0) {
                    maxId++;
                    item.put("id", maxId);
                }
                existingDataList.add(item);
            }

            String updatedData = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(existingDataList);
            writeFile(galleryFilePath, updatedData);
            return ResponseEntity.ok("Gallery data saved successfully");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save gallery data");
        }
    }

    @PostMapping("/trending")
    public ResponseEntity<String> saveTrendingData(@RequestBody String trendingData) {
        try {
            List<Map<String, Object>> newDataList = objectMapper.readValue(trendingData, new TypeReference<List<Map<String, Object>>>() {});
            List<Map<String, Object>> existingDataList;

            File file = new File(trendingFilePath);
            if (file.exists()) {
                existingDataList = objectMapper.readValue(file, new TypeReference<List<Map<String, Object>>>() {});
            } else {
                existingDataList = new java.util.ArrayList<>();
            }

            int maxId = existingDataList.stream()
                    .mapToInt(item -> item.get("id") == null ? 0 : (int) item.get("id"))
                    .max()
                    .orElse(0);

            for (Map<String, Object> item : newDataList) {
                if (item.get("id") == null || (int) item.get("id") == 0) {
                    maxId++;
                    item.put("id", maxId);
                }
                existingDataList.add(item);
            }

            String updatedData = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(existingDataList);
            writeFile(trendingFilePath, updatedData);
            return ResponseEntity.ok("Trending data saved successfully");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save trending data");
        }
    }

    private void writeFile(String filePath, String data) throws IOException {
        File file = new File(filePath);
        // Ensure parent directories exist
        file.getParentFile().mkdirs();
        try (FileWriter writer = new FileWriter(file, false)) {
            writer.write(data);
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<Map<String, Object>>> getUsers() {
        List<Map<String, Object>> users = new ArrayList<>();

        Map<String, Object> user1 = new HashMap<>();
        user1.put("id", 1);
        user1.put("username", "admin");
        user1.put("email", "admin@example.com");
        user1.put("role", "Administrator");

        Map<String, Object> user2 = new HashMap<>();
        user2.put("id", 2);
        user2.put("username", "user1");
        user2.put("email", "user1@example.com");
        user2.put("role", "User");

        users.add(user1);
        users.add(user2);

        return ResponseEntity.ok(users);
    }
}
