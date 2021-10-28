#!/bin/bash
PY_FILES=$@

CLEANED_PY_FILES=
for PY_FILE in $PY_FILES
do
    CLEANED_PY_FILES="$CLEANED_PY_FILES ${PY_FILE#'server/'}"
done

cd server/
poetry run black $CLEANED_PY_FILES
poetry run isort deckofcards tests $CLEANED_PY_FILES
poetry run autoflake --in-place --recursive --remove-all-unused-imports --remove-duplicate-keys --remove-unused-variables $CLEANED_PY_FILES
poetry run flake8 $CLEANED_PY_FILES
poetry run bandit --exclude **/tests/* $CLEANED_PY_FILES
