# 1) Build stage
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

# Copy .NET project files and restore
COPY Backend/BusinessLogic/*.csproj ./BusinessLogic/
COPY Backend/DataAccess/*.csproj ./DataAccess/

# Also copy the solution file
COPY Backend.sln ./


RUN dotnet restore

# Copy the rest of your .NET code
COPY . ./

# Publish for release
RUN dotnet publish -c Release -o out

# 2) Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

# Copy the published output from build stage
COPY --from=build-env /app/out ./

# Cloud Run expects the service to listen on port 8080
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

# Replace 'YourProject.dll' with the actual DLL name from your .csproj
ENTRYPOINT ["dotnet", "YourProject.dll"]
