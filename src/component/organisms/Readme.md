# Atomic Design: Organisms 層ルール

## Organisms 層の定義
- **Organisms 層**は、複数のIons・Molecules層のコンポーネントにより構成されます。

## 実装ルール

### 1. 結合テストの実装(必要なら)
- Organisms 層のコンポーネントには、結合テストを実装してください。

### 2. デザインとロジックの分離
- **デザイン (CSS ファイル)** と **ロジック** を分離し、保守性を高めてください。

### 3. 依存先の制約
- Organisms 層のコンポーネントは、**Ions・Molecules 層**のみに依存します。

### 4. 参照先の制約
- Organisms 層のコンポーネントは、**Templates 層**に参照されます。
