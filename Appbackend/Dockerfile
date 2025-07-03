FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /app
COPY Appbackend/ .   
RUN mvn clean package

FROM eclipse-temurin:17-jdk
COPY --from=build /app/target/*.jar demo.jar
EXPOSE 8080
ENTRYPOINT sh -c 'java -Dserver.port=${PORT:-8080} -jar demo.jar'
