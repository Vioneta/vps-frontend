import type { FlattenObjectKeys } from "../../vioneta-frontend/src/common/translations/localize";

type TranslationDict = typeof import("../localize/languages/en.json");

export type HacsLocalizeKeys = FlattenObjectKeys<TranslationDict>;
