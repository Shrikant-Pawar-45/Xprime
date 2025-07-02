# PowerShell script to set JAVA_HOME and run Maven Wrapper build

# Set JAVA_HOME to your JDK installation path (updated as per user input, using forward slashes)
$env:JAVA_HOME = "C:/Users/Welcome/.jdks/openjdk-24.0.1"

# Add JAVA_HOME bin to PATH
$env:PATH = "$env:JAVA_HOME/bin;" + $env:PATH

# Run Maven Wrapper clean install
.\mvnw clean install
