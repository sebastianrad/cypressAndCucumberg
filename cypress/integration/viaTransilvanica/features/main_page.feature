Feature: test main page from Via Transilvanica

    Feature Description

    Background:
        Given main page is loaded

    Scenario: check the logo is displayed
        Then "logo" is displayed

    @smoke
    Scenario: check the header menu is displayed
        When "header" menu is displayed
        Then the elements are visible

    Scenario Outline: page titles are visible
        When click the navigation menu <nr>
        Then the "<title>" <nr> is visible

        Examples:
            | title                                         | nr |
            | AM LANSAT MAGAZINUL ONLINE VIA TRANSILVANICA! | 0  |
            | Via Transilvanica Maraton                     | 1  |
            | DECATHLON - UN NOU PARTENER                   | 2  |
            | PARTENERIAT PENTRU SUSTENABILITATE            | 3  |
            | PARTENERIATUL STRATEGIC CONTINUĂ!             | 4  |
            | CONTRIBUIE                                    | 5  |
            | EXPLOREAZĂ                                    | 6  |
            | GHIDUL DRUMEȚULUI pe Via Transilvanica        | 7  |

    Scenario: check cookies popup is visible
        Then cookies popup is displayed

    Scenario Outline: check the color for language button
        When I check the color for "<button>"
        Then The "<button>" "<rgb color>" is:

        Examples:
            | button | rgb color          |
            | RO     | rgb(239, 125, 0)   |
            | EN     | rgb(255, 255, 255) |

    Scenario Outline: check the color for language button after click on EN
        When I click on En button
        Then The "<button>" "<rgb color>" is:

        Examples:
            | button | rgb color          |
            | EN     | rgb(239, 125, 0)   |
            | RO     | rgb(255, 255, 255) |
