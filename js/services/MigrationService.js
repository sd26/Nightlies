
/**
 * Migrations that run when updating DuckieTV version.
 */
DuckieTV.run(['SettingsService', function(SettingsService) {
  // delete watchlist
  if (!localStorage.getItem('1.1.6deleteWatchList')) {
    console.info('Executing 1.1.6deleteWatchList')
    CRUD.executeQuery('drop table WatchList')
    CRUD.executeQuery('drop table WatchListObject')
    localStorage.setItem('1.1.6deleteWatchList', new Date())
    console.info('1.1.6deleteWatchList done!')
  }
  // update quality list
  if (!localStorage.getItem('1.1.6updateQualityList')) {
    console.info('Executing 1.1.6updateQualityList')
    SettingsService.set('torrenting.searchqualitylist', ['HDTV', '720p', '1080p', '2160p', 'x265']);
    localStorage.setItem('1.1.6updateQualityList', new Date())
    console.info('1.1.6updateQualityList done!')
  }
}])
