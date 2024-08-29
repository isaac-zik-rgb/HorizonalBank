# Use a base image with java
FROM openjdk:17-jdk-alpine


# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the host to the container
COPY build/libs/ata-0.0.1-SNAPSHOT.jar


# Expose the port my application will run application on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
