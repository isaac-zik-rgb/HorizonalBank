# Use an appropriate base image with the JDK version you need
FROM openjdk:17-jdk-slim

# Define a build argument to specify the JAR file path
ARG JAR_FILE=./build/libs/ata-0.0.1-SNAPSHOT.jar

# Copy the JAR file from the build context to the container
COPY ${JAR_FILE} app.jar

# Expose port 8080 for the application
EXPOSE 8080

# Set the command to run the JAR file
ENTRYPOINT ["java", "-jar", "/app.jar"]
