# Stage 1: Build the application (if you are including the build process in Docker)
# Use this if you need to build your app within Docker
# FROM gradle:7.5.0-jdk17 AS builder
# WORKDIR /app
# COPY . .
# RUN gradle build --no-daemon

# Stage 2: Create the final image
FROM openjdk:17-jdk-slim

# Define the JAR file path
ARG JAR_FILE=build/libs/*.jar

# Copy the JAR file into the container
COPY ${JAR_FILE} app.jar

# Expose port 8080
EXPOSE 8080

# Set the command to run the JAR file
ENTRYPOINT ["java", "-jar", "/app.jar"]
