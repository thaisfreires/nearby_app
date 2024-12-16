import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        gap: 14,
        height: 56,
        maxHeight: 56,
        backgroundColor: colors.green.base,
        borderRadius:10,
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    title: {
        fontSize:16,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[100],
    }
})