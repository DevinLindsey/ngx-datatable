import { EventEmitter, ChangeDetectorRef, AfterViewInit, ElementRef, QueryList } from '@angular/core';
import { SortType, SelectionType } from '../../types';
import { DataTableColumnDirective } from '../columns';
import { DataTableHeaderCellComponent } from '.';
export declare class DataTableHeaderComponent implements AfterViewInit {
    private cd;
    private elementRef;
    sortAscendingIcon: any;
    sortDescendingIcon: any;
    scrollbarH: boolean;
    dealsWithGroup: boolean;
    targetMarkerTemplate: any;
    targetMarkerContext: any;
    tabFocusColumnName: string;
    innerWidth: number;
    sorts: any[];
    sortType: SortType;
    allRowsSelected: boolean;
    selectionType: SelectionType;
    reorderable: boolean;
    dragEventTarget: any;
    headerHeight: any;
    columns: any[];
    offsetX: number;
    sort: EventEmitter<any>;
    reorder: EventEmitter<any>;
    resize: EventEmitter<any>;
    select: EventEmitter<any>;
    columnContextmenu: EventEmitter<{
        event: MouseEvent;
        column: any;
    }>;
    scroll: EventEmitter<any>;
    headerCells: QueryList<DataTableHeaderCellComponent>;
    _columnsByPin: any;
    _columnGroupWidths: any;
    _innerWidth: number;
    _offsetX: number;
    _columns: any[];
    _headerHeight: string;
    _styleByGroup: {
        [prop: string]: {};
    };
    constructor(cd: ChangeDetectorRef, elementRef: ElementRef);
    ngAfterViewInit(): void;
    onLongPressStart({ event, model }: {
        event: any;
        model: any;
    }): void;
    onLongPressEnd({ event, model }: {
        event: any;
        model: any;
    }): void;
    readonly headerWidth: string;
    onclick(event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    trackByGroups(index: number, colGroup: any): any;
    columnTrackingFn(index: number, column: any): any;
    onColumnResized(width: number, column: DataTableColumnDirective): void;
    onColumnReordered({ prevIndex, newIndex, model }: any): void;
    onTargetChanged({ prevIndex, newIndex, initialIndex }: any): void;
    getColumn(index: number): any;
    onSort({ column, prevValue, newValue }: any): void;
    calcNewSorts(column: any, prevValue: number, newValue: number): any[];
    setStylesByGroup(): void;
    calcStylesByGroup(group: string): any;
}
