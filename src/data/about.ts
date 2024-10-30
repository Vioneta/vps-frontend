import type { Hacs } from "./hacs";
import { version } from "../version";
import { documentationUrl } from "../tools/documentation";

export const aboutHacsmarkdownContent = (hacs: Hacs) => `
**${hacs.localize("dialog_about.integration_version")}:** | ${hacs.info.version}
:--|--
**${hacs.localize("dialog_about.frontend_version")}:** | ${version}
**${hacs.localize("common.repositories")}:** | ${hacs.repositories.length}
**${hacs.localize("dialog_about.downloaded_repositories")}:** | ${
  hacs.repositories.filter((repo) => repo.installed).length
}

**${hacs.localize("dialog_about.useful_links")}:**

- [General documentation](${documentationUrl({})})
- [Configuration](${documentationUrl({
  path: "/docs/use/configuration/basic",
})})
- [GitHub](https://github.com/Vioneta)

***

_Everything you find in PLUGINS is **not** tested by Vioneta, that includes PLUGINS itself.
The PLUGINS and Vioneta teams do not support **anything** you find here._`;
