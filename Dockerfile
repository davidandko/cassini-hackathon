# Base image
FROM python:3.10-slim

# Set the working directory
WORKDIR /app

# Copy only requirements first (for better caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Enter ENV variables here

# Copy the FastAPI app code
COPY app/ ./app

# Expose the port FastAPI will run on
EXPOSE 8000

# Command to run FastAPI app
CMD ["uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]