# # Stage 1: Build the JAR file
# FROM gradle:7.5.0-jdk17 AS builder
# WORKDIR /app
# COPY . .
# RUN gradle build --no-daemon
#
# # Stage 2: Build the final image
# FROM openjdk:17-jdk-alpine
# VOLUME /tmp
# COPY --from=builder /app/build/libs/ata-0.0.1-SNAPSHOT.jar app.jar
# ENTRYPOINT ["java","-jar","/app.jar"]

# Stage 1: Build the JAR file
FROM gradle:7.5.0-jdk17 AS builder

# Set the working directory inside the container
WORKDIR /app

# Cache dependencies
COPY build.gradle settings.gradle ./
RUN gradle build -x test --no-daemon --parallel --continue

# Copy the rest of the project files
COPY . .

# Build the application
RUN gradle build -x test --no-daemon --parallel --continue

# Stage 2: Create the final image
FROM openjdk:17-jdk-alpine

# Create a volume for temporary files
VOLUME /tmp

# Copy the JAR file from the build stage
COPY --from=builder /app/build/libs/ata-0.0.1-SNAPSHOT.jar app.jar

# Set the entry point to run the JAR
ENTRYPOINT ["java","-jar","/app.jar"]
