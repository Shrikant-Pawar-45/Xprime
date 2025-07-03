#
# Build stage
#
FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package
RUN mvn clean install
#
# Package stage
#
FROM eclipse-temurin:17-jdk
COPY --from=build /target/*.jar demo.jar
EXPOSE 8080
ENTRYPOINT ["java","-Dserver.port=$PORT","-jar","demo.jar"]
