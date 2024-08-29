# Stage 1: Build the JAR file
FROM gradle:7.5.0-jdk17 AS builder
WORKDIR /app
COPY . .
RUN gradle build --no-daemon

# Stage 2: Build the final image
FROM openjdk:17-jdk-alpine
VOLUME /tmp
COPY --from=builder /app/build/libs/ata-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
