Feature: test main page from Via Transilvanica

    Feature Description

 #   Scenario: check the logo is displayed
 #       Given main page is loaded
 #       Then "logo" is displayed
#

    @smoke
    Scenario: check the header menu is displayed
        Given main page is loaded
        When "header" menu is displayed
        Then the elements are visible

#    Scenario Outline: page titles are visible
#        Given main page is loaded
#        When click the navigation menu <nr>
#        Then the "<title>" <nr> is visible

#        Examples:
#            | title                                         | nr |
#            | AM LANSAT MAGAZINUL ONLINE VIA TRANSILVANICA! | 0  |
#            | Via Transilvanica Maraton                     | 1  |
#            | DECATHLON - UN NOU PARTENER                   | 2  |
#            | PARTENERIAT PENTRU SUSTENABILITATE            | 3  |
#            | PARTENERIATUL STRATEGIC CONTINUĂ!             | 4  |
#            | CONTRIBUIE                                    | 5  |
#            | EXPLOREAZĂ                                    | 6  |
#            | GHIDUL DRUMEȚULUI pe Via Transilvanica        | 7  |

    Scenario: check cookies popup is visible
       Given main page is loaded
       Then cookies popup is displayed

