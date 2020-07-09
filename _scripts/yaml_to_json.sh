#!/bin/sh
echo "converted yaml to json"
ruby -rjson -ryaml -e "puts YAML.load_file('./_data/solutions.yaml').to_json" > ./_scripts/solutions.json
