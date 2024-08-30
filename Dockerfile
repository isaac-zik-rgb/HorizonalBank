# Use a base image with Java installed
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app


# Copy the JAR file into the container
COPY build/libs/*.jar /app/

# Expose the port the app runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app/ata-0.0.1-SNAPSHOT.jar"]

# Dummy comment to force rebuild
# This forces Docker to rebuild from this line onward
