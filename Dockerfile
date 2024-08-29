# Use a base image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy all JAR files from build/libs/ to /app/
COPY build/libs/*.jar /app/

# List files in the /app directory to verify the copy worked


# Expose the port the app runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app/ata-0.0.1-SNAPSHOT.jar"]
