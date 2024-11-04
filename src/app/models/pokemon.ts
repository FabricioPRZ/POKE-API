export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
    front_shiny?: string;
    back_default?: string;
    back_shiny?: string;
    other: {
      official_artwork: {
        front_default: string;
      };
    };
  };
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  game_indices: Array<{
    version: {
      name: string;
    };
  }>;
}
