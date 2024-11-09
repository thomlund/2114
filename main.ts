scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    scene.setBackgroundColor(9)
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite.setPosition(2, 1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles16, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral2, function (sprite, location) {
    info.changeLifeBy(-1)
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`figur`, SpriteKind.Player)
info.setLife(3)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level3`)
