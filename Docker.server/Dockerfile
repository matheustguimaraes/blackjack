FROM python:3.9.5

ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y \
    sudo && apt-get install -y \
    git \
    nginx \
    postgresql-client \
    python-psycopg2 \
    supervisor

RUN mkdir /code
ADD docker /code

RUN rm /etc/supervisor/supervisord.conf && \
    ln -s /code/docker/Docker.server/supervisord.conf /etc/supervisor/supervisord.conf && \
    rm /etc/nginx/nginx.conf && \
    ln -s /code/docker/Docker.server/nginx.conf /etc/nginx/nginx.conf && \
    mkdir -p /var/log/supervisor && \
    mkdir -p /var/log/gunicorn && \
    mkdir -p /code/logs/supervisord

RUN groupadd -r app -g 1000 && \
    useradd -u 1000 -r -g app -d /code -s /bin/bash -c "Docker image user" app
RUN chown -R app:app /code && \
    chown -R app:app /var/run && \
    chown -R app:app /var/log/gunicorn

RUN pip install poetry
RUN pip install gunicorn
ADD server/pyproject.toml server/poetry.lock /code/server/
ADD .env /code
WORKDIR /code/server

# Install python requirements
RUN poetry export -f requirements.txt --output /code/server/requirements.txt && pip install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["/bin/bash", "/code/docker/Docker.server/entrypoint.sh"]
CMD ["development"]
