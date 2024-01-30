from datetime import datetime, date
import json
import os

import yaml


class DateTimeEncoder(json.JSONEncoder):
        def default(self, obj):
            if isinstance(obj, (datetime, date)):
                return obj.isoformat()
            return json.JSONEncoder.default(self, obj)


if __name__ == "__main__":
    res = []

    dirname = "dist"
    directory = os.fsencode(dirname)
    for file in os.listdir(directory):
        filename = os.fsdecode(file)
        if filename.endswith("publiccode.yml"):
            with open(os.path.join(dirname, filename), mode="r") as yaml_file:
                res.append(yaml.safe_load(yaml_file))

    with open("awesome-codegouvfr.json", "w") as json_file:
        json.dump(res, json_file, cls=DateTimeEncoder)
