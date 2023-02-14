export declare const viewportRange: {
    narrow: string;
    regular: string;
    wide: string;
};
declare const lightThemeClass: string, primitives: {
    colors: {
        canvasDefaultTransparent: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        pageHeaderBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        marketingIcon: {
            primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            secondary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        diffBlob: {
            addition: {
                numText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                fg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                numBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                lineBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                wordBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            deletion: {
                numText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                fg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                numBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                lineBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                wordBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            hunk: {
                numBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            expander: {
                icon: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            selectedLineHighlightMixBlendMode: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        diffstat: {
            deletionBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            additionBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            additionBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        searchKeyword: {
            hl: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        prettylights: {
            syntax: {
                comment: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                constant: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                entity: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                storageModifierImport: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                entityTag: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                keyword: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                string: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                variable: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                brackethighlighterUnmatched: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                invalidIllegalText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                invalidIllegalBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                carriageReturnText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                carriageReturnBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                stringRegexp: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupList: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupHeading: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupItalic: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupBold: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupDeletedText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupDeletedBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupInsertedText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupInsertedBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupChangedText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupChangedBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupIgnoredText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                markupIgnoredBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                metaDiffRange: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                brackethighlighterAngle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                sublimelinterGutterMark: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                constantOtherReferenceLink: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        codemirror: {
            text: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            guttersBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            guttermarkerText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            guttermarkerSubtleText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            linenumberText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            cursor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            selectionBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            activelineBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            matchingbracketText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            linesBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            syntax: {
                comment: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                constant: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                entity: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                keyword: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                storage: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                string: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                support: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                variable: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        checks: {
            bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            runBorderWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            containerBorderWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            textPrimary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            textSecondary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            textLink: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            btnIcon: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            btnHoverIcon: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            btnHoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            inputText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            inputPlaceholderText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            inputFocusText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            inputBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            inputShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            donutError: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            donutPending: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            donutSuccess: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            donutNeutral: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dropdownText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dropdownBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dropdownBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dropdownShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dropdownHoverText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dropdownHoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dropdownBtnHoverText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            dropdownBtnHoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            scrollbarThumbBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            headerLabelText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            headerLabelOpenText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            headerBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            headerIcon: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineNumText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineTimestampText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineHoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineSelectedBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineSelectedNumText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineDtFmText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineDtFmBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            gateBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            gateText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            gateWaitingText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            stepHeaderOpenBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            stepErrorText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            stepWarningText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loglineText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loglineNumText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loglineDebugText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loglineErrorText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loglineErrorNumText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loglineErrorBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loglineWarningText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loglineWarningNumText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loglineWarningBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loglineCommandText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            loglineSectionText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            ansi: {
                black: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                blackBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                white: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                whiteBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                gray: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                red: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                redBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                green: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                greenBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                yellow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                yellowBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                blue: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                blueBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                magenta: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                magentaBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                cyan: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                cyanBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        project: {
            headerBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            sidebarBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            gradientIn: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            gradientOut: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        mktg: {
            btn: {
                bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                shadow: {
                    outline: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    focus: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    hover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    hoverMuted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
        avatar: {
            bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            border: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            stackFade: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            stackFadeMore: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            childShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        topicTag: {
            border: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        counter: {
            border: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        selectMenu: {
            backdropBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            tapHighlight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            tapFocusBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        overlay: {
            shadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        header: {
            text: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            divider: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            logo: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        headerSearch: {
            bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            border: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        sidenav: {
            selectedBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        menu: {
            bgActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        input: {
            disabledBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        timeline: {
            badgeBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        ansi: {
            black: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            blackBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            white: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            whiteBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            gray: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            red: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            redBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            green: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            greenBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            yellow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            yellowBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            blue: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            blueBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            magenta: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            magentaBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            cyan: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            cyanBright: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        btn: {
            text: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            border: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            shadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            insetShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            hoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            hoverBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            activeBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            activeBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            selectedBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            focusBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            focusBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            focusShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            shadowActive: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            shadowInputFocus: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            counterBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            primary: {
                text: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                border: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                shadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                insetShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                selectedBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                selectedShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                disabledText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                disabledBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                disabledBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                focusBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                focusBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                focusShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                icon: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                counterBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            outline: {
                text: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverInsetShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverCounterBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                selectedText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                selectedBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                selectedBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                selectedShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                disabledText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                disabledBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                disabledCounterBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                focusBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                focusShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                counterBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            danger: {
                text: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverInsetShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverCounterBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                selectedText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                selectedBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                selectedBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                selectedShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                disabledText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                disabledBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                disabledCounterBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                focusBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                focusShadow: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                counterBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                icon: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverIcon: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        underlinenav: {
            icon: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            borderHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        actionListItem: {
            inlineDivider: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            default: {
                hoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                activeBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                activeBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                selectedBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            danger: {
                hoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                activeBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        switchTrack: {
            bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            border: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            checked: {
                bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                hoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                activeBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                border: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        switchKnob: {
            checked: {
                bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                disabledBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        segmentedControl: {
            bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            button: {
                hover: {
                    bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                active: {
                    bg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                selected: {
                    border: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
        treeViewItem: {
            chevron: {
                hoverBg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            directory: {
                fill: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        fg: {
            default: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            onEmphasis: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        canvas: {
            default: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            overlay: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            inset: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        border: {
            default: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        shadow: {
            small: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            large: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            extraLarge: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        neutral: {
            emphasisPlus: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            emphasis: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        accent: {
            fg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            emphasis: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        success: {
            fg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            emphasis: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        attention: {
            fg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            emphasis: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        severe: {
            fg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            emphasis: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        danger: {
            fg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            emphasis: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        open: {
            fg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            emphasis: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        closed: {
            fg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            emphasis: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        done: {
            fg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            emphasis: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        sponsors: {
            fg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            emphasis: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            muted: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            subtle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        primer: {
            fg: {
                disabled: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            canvas: {
                backdrop: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                sticky: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            border: {
                active: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                contrast: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            shadow: {
                highlight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                inset: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                focus: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
    };
    primer: {
        control: {
            minTarget: {
                fine: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                coarse: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            xsmall: {
                size: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                lineBoxHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                paddingBlock: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                paddingInline: {
                    condensed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    spacious: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            small: {
                size: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                lineBoxHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                paddingBlock: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                paddingInline: {
                    condensed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            medium: {
                size: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                lineBoxHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                paddingBlock: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                paddingInline: {
                    condensed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    spacious: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            large: {
                size: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                lineBoxHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                paddingBlock: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                paddingInline: {
                    normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    spacious: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            xlarge: {
                size: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                lineBoxHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                paddingBlock: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                paddingInline: {
                    normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    spacious: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                gap: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        stack: {
            padding: {
                condensed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                spacious: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            gap: {
                condensed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                spacious: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        controlStack: {
            small: {
                gap: {
                    condensed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    spacious: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            medium: {
                gap: {
                    condensed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    spacious: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            large: {
                gap: {
                    auto: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    condensed: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    spacious: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
        fontStack: {
            system: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            sansSerif: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            monospace: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        text: {
            display: {
                lineBoxHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                size: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                weight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                shorthand: {
                    fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            title: {
                size: {
                    large: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                lineHeight: {
                    large: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                weight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                shorthand: {
                    large: {
                        fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    };
                    medium: {
                        fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    };
                };
            };
            subtitle: {
                size: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                weight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                shorthand: {
                    fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            body: {
                size: {
                    large: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    small: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                lineHeight: {
                    large: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    small: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                weight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                shorthand: {
                    large: {
                        fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    };
                    medium: {
                        fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    };
                    small: {
                        fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                        fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    };
                };
            };
            caption: {
                size: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                weight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                shorthand: {
                    fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            codeBlock: {
                size: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                weight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                shorthand: {
                    fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
            codeInline: {
                size: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                weight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                shorthand: {
                    fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
    };
    base: {
        size: {
            4: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            8: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            12: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            16: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            20: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            24: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            28: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            32: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            36: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            40: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            44: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            48: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            64: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            80: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            96: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            112: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            128: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        text: {
            weight: {
                light: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                normal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                medium: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                semibold: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
    };
    radii: {
        0: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        3: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        6: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        full: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
};
declare const darkThemeClass: string;
export { primitives, lightThemeClass, darkThemeClass };
